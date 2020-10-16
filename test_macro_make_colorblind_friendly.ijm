// this is what it takes to make a red/geen image
// colorblind friendly

run("Make Composite");
setSlice(1);
run("Magenta");
setSlice(2);
run("Green");
// optional: remove blue channel completely
// (some jpgs have residual blue channel which decrease contrast)
setSlice(3);
run("Delete Slice", "delete=channel");
