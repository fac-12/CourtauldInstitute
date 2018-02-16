// Function to filter events according to criteria
import _ from "lodash";
import { createSelector } from "reselect";

const getFilter = state => state.filter;
const getUpdates = state => state.updates.data;
const getDiscoveries = state => state.discoveries.data;
const getDirectory = state => state.directory;

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

export const sortDiscoveries = createSelector([getDiscoveries], discoveries =>
  _.reverse(_.sortBy(_.values(discoveries), "datetime"))
);

export const sortDirectory = createSelector([getDirectory], directory =>
  _.sortBy(_.values(directory), "first_name")
);
