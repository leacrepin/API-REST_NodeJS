const db = require('../_helpers/db');
const Fiber = db.Fiber;

module.exports = {
  near,
};
async function near({
  x,
  y
}) {
  const near = await Fiber.find({
    geometry: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [x, y]
        },
        $minDistance: 0,
        $maxDistance: 400
      }
    }
  }).limit(50)
  return near
}