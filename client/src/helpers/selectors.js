// Function to filter events according to criteria
import _ from "lodash";
import { createSelector } from "reselect";
import { pInt } from "../helpers/conversions";

const getFilter = state => state.filter;
const getUpdates = state => state.updates;

export const filterUpdates = createSelector(
  [getFilter, getUpdates],
  (updateFilter, updates) => {
    if (updateFilter === "all") {
      return _.reverse(_.sortBy(_.values(updates), "datetime"));
    }
    const filteredArray = _.values(updates).reduce((filtered, update) => {
      if (update.tags.includes(updateFilter)) {
        return filtered.concat(update);
      }
      return filtered;
    }, []);
    return _.reverse(_.sortBy(filteredArray), "datetime");
  }
);
