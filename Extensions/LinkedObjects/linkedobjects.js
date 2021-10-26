var gdjs;
(function(gdjs2) {
  class LinksManager {
    constructor() {
      this._links = new Map();
    }
    static getManager(runtimeScene) {
      if (!runtimeScene.linkedObjectsManager) {
        runtimeScene.linkedObjectsManager = new gdjs2.LinksManager();
      }
      return runtimeScene.linkedObjectsManager;
    }
    _getMapOfObjectsLinkedWith(objA) {
      if (!this._links.has(objA.id)) {
        this._links.set(objA.id, new IterableLinkedObjects());
      }
      return this._links.get(objA.id).linkedObjectMap;
    }
    getObjectsLinkedWith(objA) {
      if (!this._links.has(objA.id)) {
        this._links.set(objA.id, new IterableLinkedObjects());
      }
      return this._links.get(objA.id);
    }
    getObjectsLinkedWithAndNamed(objA, objectName) {
      let objects = this._getMapOfObjectsLinkedWith(objA).get(objectName);
      if (!objects) {
        objects = gdjs2.staticArray(LinksManager.prototype.getObjectsLinkedWithAndNamed);
      }
      return objects;
    }
    linkObjects(objA, objB) {
      const objALinkedObjectMap = this._getMapOfObjectsLinkedWith(objA);
      if (!objALinkedObjectMap.has(objB.getName())) {
        objALinkedObjectMap.set(objB.getName(), []);
      }
      const objALinkedObjects = objALinkedObjectMap.get(objB.getName());
      if (objALinkedObjects.indexOf(objB) === -1) {
        objALinkedObjects.push(objB);
      }
      const objBLinkedObjectMap = this._getMapOfObjectsLinkedWith(objB);
      if (!objBLinkedObjectMap.has(objA.getName())) {
        objBLinkedObjectMap.set(objA.getName(), []);
      }
      const objBLinkedObjects = objBLinkedObjectMap.get(objA.getName());
      if (objBLinkedObjects.indexOf(objA) === -1) {
        objBLinkedObjects.push(objA);
      }
    }
    removeAllLinksOf(removedObject) {
      const links = this._links.get(removedObject.id);
      if (!links) {
        return;
      }
      for (const linkedObjects of links.linkedObjectMap.values()) {
        for (let i = 0; i < linkedObjects.length; i++) {
          const linkedObject = linkedObjects[i];
          if (this._links.has(linkedObject.id)) {
            const otherObjList = this._links.get(linkedObject.id).linkedObjectMap.get(removedObject.getName());
            const index = otherObjList.indexOf(removedObject);
            if (index !== -1) {
              otherObjList.splice(index, 1);
            }
          }
        }
      }
      this._links.delete(removedObject.id);
    }
    removeLinkBetween(objA, objB) {
      if (this._links.has(objA.id)) {
        const map = this._links.get(objA.id).linkedObjectMap;
        if (map.has(objB.getName())) {
          const list = map.get(objB.getName());
          const index = list.indexOf(objB);
          if (index !== -1) {
            list.splice(index, 1);
          }
        }
      }
      if (this._links.has(objB.id)) {
        const map = this._links.get(objB.id).linkedObjectMap;
        if (map.has(objA.getName())) {
          const list = map.get(objA.getName());
          const index = list.indexOf(objA);
          if (index !== -1) {
            list.splice(index, 1);
          }
        }
      }
    }
  }
  gdjs2.LinksManager = LinksManager;
  class IterableLinkedObjects {
    constructor() {
      this.linkedObjectMap = new Map();
    }
    [Symbol.iterator]() {
      let mapItr = this.linkedObjectMap.entries();
      let listItr = [].entries();
      return {
        next: () => {
          let listNext = listItr.next();
          while (listNext.done) {
            const mapNext = mapItr.next();
            if (mapNext.done) {
              return {value: void 0, done: true};
            }
            listItr = mapNext.value[1].entries();
            listNext = listItr.next();
          }
          return {value: listNext.value[1], done: false};
        }
      };
    }
  }
  let evtTools;
  (function(evtTools2) {
    let linkedObjects;
    (function(linkedObjects2) {
      gdjs2.registerObjectDeletedFromSceneCallback(function(runtimeScene, obj) {
        LinksManager.getManager(runtimeScene).removeAllLinksOf(obj);
      });
      linkedObjects2.linkObjects = function(runtimeScene, objA, objB) {
        if (objA === null || objB === null) {
          return;
        }
        LinksManager.getManager(runtimeScene).linkObjects(objA, objB);
      };
      linkedObjects2.removeLinkBetween = function(runtimeScene, objA, objB) {
        if (objA === null || objB === null) {
          return;
        }
        LinksManager.getManager(runtimeScene).removeLinkBetween(objA, objB);
      };
      linkedObjects2.removeAllLinksOf = function(runtimeScene, objA) {
        if (objA === null) {
          return;
        }
        LinksManager.getManager(runtimeScene).removeAllLinksOf(objA);
      };
      linkedObjects2.pickObjectsLinkedTo = function(runtimeScene, objectsLists, obj, eventsFunctionContext) {
        if (obj === null) {
          return false;
        }
        const linkedObjectMap = LinksManager.getManager(runtimeScene)._getMapOfObjectsLinkedWith(obj);
        let pickedSomething = false;
        for (const contextObjectName in objectsLists.items) {
          if (objectsLists.containsKey(contextObjectName)) {
            const parentEventPickedObjects = objectsLists.items[contextObjectName];
            if (parentEventPickedObjects.length === 0) {
              continue;
            }
            const parentEventPickedObjectNames = gdjs2.staticArray2(gdjs2.evtTools.linkedObjects.pickObjectsLinkedTo);
            parentEventPickedObjectNames.length = 0;
            if (eventsFunctionContext) {
              for (const pickedObject of parentEventPickedObjects) {
                if (parentEventPickedObjectNames.indexOf(pickedObject.getName()) < 0) {
                  parentEventPickedObjectNames.push(pickedObject.getName());
                }
              }
            } else {
              parentEventPickedObjectNames.push(contextObjectName);
            }
            let objectCount = 0;
            for (const objectName of parentEventPickedObjectNames) {
              objectCount += runtimeScene.getObjects(objectName).length;
            }
            if (parentEventPickedObjects.length === objectCount) {
              parentEventPickedObjects.length = 0;
              for (const objectName of parentEventPickedObjectNames) {
                if (linkedObjectMap.has(objectName)) {
                  const linkedObjects3 = linkedObjectMap.get(objectName);
                  pickedSomething = pickedSomething || linkedObjects3.length > 0;
                  parentEventPickedObjects.push.apply(parentEventPickedObjects, linkedObjects3);
                }
              }
            } else {
              const pickedAndLinkedObjects = gdjs2.staticArray(gdjs2.evtTools.linkedObjects.pickObjectsLinkedTo);
              pickedAndLinkedObjects.length = 0;
              for (const objectName of parentEventPickedObjectNames) {
                if (linkedObjectMap.has(objectName)) {
                  const linkedObjects3 = linkedObjectMap.get(objectName);
                  for (const otherObject of linkedObjects3) {
                    if (parentEventPickedObjects.indexOf(otherObject) >= 0) {
                      pickedAndLinkedObjects.push(otherObject);
                    }
                  }
                }
              }
              pickedSomething = pickedSomething || pickedAndLinkedObjects.length > 0;
              parentEventPickedObjects.length = 0;
              parentEventPickedObjects.push.apply(parentEventPickedObjects, pickedAndLinkedObjects);
              pickedAndLinkedObjects.length = 0;
            }
            parentEventPickedObjectNames.length = 0;
          }
        }
        return pickedSomething;
      };
    })(linkedObjects = evtTools2.linkedObjects || (evtTools2.linkedObjects = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=linkedobjects.js.map
