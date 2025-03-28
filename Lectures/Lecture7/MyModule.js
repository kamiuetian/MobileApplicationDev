//module js file
function MyModule() {
  console.log("MyModule");
}
function anotherModule() {
  console.log("anotherModule");
}
export { anotherModule };
export default MyModule;
