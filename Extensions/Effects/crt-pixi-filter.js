var gdjs;
(function(gdjs2) {
  gdjs2.PixiFiltersTools.registerFilterCreator("CRT", {
    makePIXIFilter: function(layer, effectData) {
      const crtFilter = new PIXI.filters.CRTFilter();
      crtFilter._animationTimer = 0;
      return crtFilter;
    },
    updatePreRender: function(filter, target) {
      if (filter.animationSpeed !== 0) {
        filter.time += target.getElapsedTime() / 1e3 * 10 * filter.animationSpeed;
      }
      if (filter.animationFrequency !== 0) {
        filter._animationTimer += target.getElapsedTime() / 1e3;
        if (filter._animationTimer >= 1 / filter.animationFrequency) {
          filter.seed = Math.random();
          filter._animationTimer = 0;
        }
      }
    },
    updateDoubleParameter: function(filter, parameterName, value) {
      if (parameterName === "lineWidth") {
        filter.lineWidth = value;
      } else if (parameterName === "lineContrast") {
        filter.lineContrast = value;
      } else if (parameterName === "noise") {
        filter.noise = value;
      } else if (parameterName === "curvature") {
        filter.curvature = value;
      } else if (parameterName === "noiseSize") {
        filter.noiseSize = value;
      } else if (parameterName === "vignetting") {
        filter.vignetting = value;
      } else if (parameterName === "vignettingAlpha") {
        filter.vignettingAlpha = value;
      } else if (parameterName === "vignettingBlur") {
        filter.vignettingBlur = value;
      } else if (parameterName === "animationSpeed") {
        filter.animationSpeed = value;
      } else if (parameterName === "animationFrequency") {
        filter.animationFrequency = value;
      } else if (parameterName === "padding") {
        filter.padding = value;
      }
    },
    updateStringParameter: function(filter, parameterName, value) {
    },
    updateBooleanParameter: function(filter, parameterName, value) {
      if (parameterName === "verticalLine") {
        filter.verticalLine = value;
      }
    }
  });
})(gdjs || (gdjs = {}));
//# sourceMappingURL=crt-pixi-filter.js.map
