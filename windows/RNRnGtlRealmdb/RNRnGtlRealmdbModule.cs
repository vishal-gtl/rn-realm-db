using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Rn.Gtl.Realmdb.RNRnGtlRealmdb
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNRnGtlRealmdbModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNRnGtlRealmdbModule"/>.
        /// </summary>
        internal RNRnGtlRealmdbModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNRnGtlRealmdb";
            }
        }
    }
}
