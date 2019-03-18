/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a DestinationGroupUpdateDetails.
 */
class DestinationGroupUpdateDetails {
  /**
   * Create a DestinationGroupUpdateDetails.
   * @property {boolean} mandatoryUpdate Whether a release is mandatory for the
   * given destination
   */
  constructor() {
  }

  /**
   * Defines the metadata of DestinationGroupUpdateDetails
   *
   * @returns {object} metadata of DestinationGroupUpdateDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'destination_group_update_details',
      type: {
        name: 'Composite',
        className: 'DestinationGroupUpdateDetails',
        modelProperties: {
          mandatoryUpdate: {
            required: true,
            serializedName: 'mandatory_update',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = DestinationGroupUpdateDetails;