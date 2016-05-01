'use strict'

angular.module('app.modulesFactory', [])

/*****************************************************************
*
* Modules factory
*
******************************************************************/
.factory('Modules', function(Registry, Config) {
  return {

    /**
     * Data Getter
     *
     * @return {Array} data
     */
    get: function() {
      /**
       * Load the registry
       */
      return Registry.load().then(function(registry){
        // registry = data
        console.log(registry)

        // Add all installed modules
        var mods = registry.installed_modules

        // Go through all available modules
        _.each(registry.available_modules, function(mod, key) {
          // If the key is set then the mod is installed
          if(mods[key]) {
            // @todo Check if this is the latest version
          }
          else {
            // Add the latest version to the mod list
            // @todo Latest version may not be last in object...
            mods[key] = {
              source_module: _.findLast(mod.module_version)
            }
          }
        })

        // Go through all mods and set status
        _.each(mods, function(mod, key) {
          // @todo Method to check whether update is available
          if(mod.install_time && false) {
            mods[key].status = 'update'
          }
          else if(mod.install_time) {
            mods[key].status = 'installed'
          }
          // @todo Check validity of this semver method
          else if(semver.valid(mod.source_module.ksp_version) && semver.lt(mod.source_module.ksp_version, Config.ksp_version)) {
            mods[key].status = 'unavailable'
          }
          else {
            mods[key].status = 'available'
          }
        })

        console.log(mods)

        return mods
      })
    }
  }
})
