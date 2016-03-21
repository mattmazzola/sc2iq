import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    switch (requestType) {
      case 'findRecord':
        return this.normalizeFindRecordResponse(...arguments);
      case 'queryRecord':
        return this.normalizeQueryRecordResponse(...arguments);
      case 'findAll':
        return this.normalizeFindAllResponse(...arguments);
      case 'findBelongsTo':
        return this.normalizeFindBelongsToResponse(...arguments);
      case 'findHasMany':
        return this.normalizeFindHasManyResponse(...arguments);
      case 'findMany':
        return this.normalizeFindManyResponse(...arguments);
      case 'query':
        return this.normalizeQueryResponse(...arguments);
      case 'createRecord':
        return this.normalizeCreateRecordResponse(...arguments);
      case 'deleteRecord':
        return this.normalizeDeleteRecordResponse(...arguments);
      case 'updateRecord':
        return this.normalizeUpdateRecordResponse(...arguments);
      }
  },

  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    const data = payload.map(x => {
      return {
        id: x.id,
        type: "question",
        attributes: x
      };
    });

    return this.normalizeArrayResponse(store, primaryModelClass, { data }, id, requestType);
  },

  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    const data = {
      id: payload.id,
      type: "question",
      attributes: payload
    };

    return this.normalizeSingleResponse(store, primaryModelClass, { data }, id, requestType);
  },

  serialize(snapshot, options) {
    let data = this._super(...arguments);
    return data.data;
  },

  serializeAttribute(snapshot, json, key, attribute) {
    var type = attribute.type;

    if (this._canSerialize(key)) {
      var value = snapshot.attr(key);
      if (type) {
        var transform = this.transformFor(type);
        value = transform.serialize(value);
      }

      // if provided, use the mapping provided by `attrs` in
      // the serializer
      var payloadKey =  this._getMappedKey(key, snapshot.type);

      if (payloadKey === key && this.keyForAttribute) {
        payloadKey = key; //this.keyForAttribute(key, 'serialize');
      }

      json[payloadKey] = value;
    }
  }
});
