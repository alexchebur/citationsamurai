var gdjs;
(function(gdjs2) {
  const _console = {
    info: console.log,
    warning: console.warn,
    error: console.error
  };
  gdjs2.log = (group, message, type = "info", internal = true) => {
    const logger = _console[type] || _console.info;
    logger(`[${group}] ${message}`);
  };
  function objectsToString(objects) {
    return objects.reduce((accumulator, value) => accumulator + value.toString(), "");
  }
  class Logger {
    constructor(group) {
      this.group = group;
    }
    log(...messages) {
      this.info(...messages);
    }
    info(...messages) {
      gdjs2.log(this.group, objectsToString(messages), "info");
    }
    warn(...messages) {
      gdjs2.log(this.group, objectsToString(messages), "warning");
    }
    error(...messages) {
      gdjs2.log(this.group, objectsToString(messages), "error");
    }
  }
  gdjs2.Logger = Logger;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=logger.js.map
