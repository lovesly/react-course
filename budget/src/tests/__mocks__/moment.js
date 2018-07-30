const moment = require.requireActual('moment');
export default (timestamp = 0) => {
    return moment(timestamp);
};
// how do we know when to call this fake moment???