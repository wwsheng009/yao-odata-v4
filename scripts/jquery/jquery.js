const jQuery = Require("jquery.lib")(null, true);
// const jQuery = require("./jquery")(null, true);

// console.log(typeof module);
//yao run scripts.jquery.jquery.dummy
function dummy() {
  // console.log(jQuery.extend);
  console.log(jQuery.jquery);
}
module.exports = {
  jQuery: jQuery,
  $: jQuery,
};
