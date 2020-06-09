const db = require('../_helpers/db');
const GSM = db.GSM;

module.exports = {
  near,
};
async function near({
  x,
  y
}) {
  const near = await GSM.find({
    geometry: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [x, y]
        },
        $minDistance: 0,
        $maxDistance: 1500
      }
    }
  }).limit(50)
  return near
}