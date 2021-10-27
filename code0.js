gdjs.Start_95splash2Code = {};
gdjs.Start_95splash2Code.GDgosplashObjects1= [];
gdjs.Start_95splash2Code.GDgosplashObjects2= [];
gdjs.Start_95splash2Code.GDbsObjects1= [];
gdjs.Start_95splash2Code.GDbsObjects2= [];
gdjs.Start_95splash2Code.GDNewObjectObjects1= [];
gdjs.Start_95splash2Code.GDNewObjectObjects2= [];

gdjs.Start_95splash2Code.conditionTrue_0 = {val:false};
gdjs.Start_95splash2Code.condition0IsTrue_0 = {val:false};
gdjs.Start_95splash2Code.condition1IsTrue_0 = {val:false};
gdjs.Start_95splash2Code.condition2IsTrue_0 = {val:false};
gdjs.Start_95splash2Code.conditionTrue_1 = {val:false};
gdjs.Start_95splash2Code.condition0IsTrue_1 = {val:false};
gdjs.Start_95splash2Code.condition1IsTrue_1 = {val:false};
gdjs.Start_95splash2Code.condition2IsTrue_1 = {val:false};


gdjs.Start_95splash2Code.eventsList0 = function(runtimeScene) {

{


gdjs.Start_95splash2Code.condition0IsTrue_0.val = false;
gdjs.Start_95splash2Code.condition1IsTrue_0.val = false;
{
gdjs.Start_95splash2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "fadein");
}if ( gdjs.Start_95splash2Code.condition0IsTrue_0.val ) {
{
{gdjs.Start_95splash2Code.conditionTrue_1 = gdjs.Start_95splash2Code.condition1IsTrue_0;
gdjs.Start_95splash2Code.condition0IsTrue_1.val = false;
{
gdjs.Start_95splash2Code.condition0IsTrue_1.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "fadein"));
}gdjs.Start_95splash2Code.conditionTrue_1.val = true && gdjs.Start_95splash2Code.condition0IsTrue_1.val;
}
}}
if (gdjs.Start_95splash2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bs"), gdjs.Start_95splash2Code.GDbsObjects1);
{for(var i = 0, len = gdjs.Start_95splash2Code.GDbsObjects1.length ;i < len;++i) {
    gdjs.Start_95splash2Code.GDbsObjects1[i].setOpacity(gdjs.Start_95splash2Code.GDbsObjects1[i].getOpacity() - (3));
}
}}

}


{


gdjs.Start_95splash2Code.condition0IsTrue_0.val = false;
{
gdjs.Start_95splash2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "fadeout");
}if (gdjs.Start_95splash2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bs"), gdjs.Start_95splash2Code.GDbsObjects1);
{for(var i = 0, len = gdjs.Start_95splash2Code.GDbsObjects1.length ;i < len;++i) {
    gdjs.Start_95splash2Code.GDbsObjects1[i].setOpacity(gdjs.Start_95splash2Code.GDbsObjects1[i].getOpacity() + (3));
}
}}

}


{


gdjs.Start_95splash2Code.condition0IsTrue_0.val = false;
{
gdjs.Start_95splash2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Start_95splash2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fadein");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fadeout");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "fadeout");
}}

}


{


gdjs.Start_95splash2Code.condition0IsTrue_0.val = false;
{
{gdjs.Start_95splash2Code.conditionTrue_1 = gdjs.Start_95splash2Code.condition0IsTrue_0;
gdjs.Start_95splash2Code.condition0IsTrue_1.val = false;
gdjs.Start_95splash2Code.condition1IsTrue_1.val = false;
{
gdjs.Start_95splash2Code.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Start_95splash2Code.condition0IsTrue_1.val ) {
{
gdjs.Start_95splash2Code.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "fadein");
}}
gdjs.Start_95splash2Code.conditionTrue_1.val = true && gdjs.Start_95splash2Code.condition0IsTrue_1.val && gdjs.Start_95splash2Code.condition1IsTrue_1.val;
}
}if (gdjs.Start_95splash2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main menu", true);
}}

}


};

gdjs.Start_95splash2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_95splash2Code.GDgosplashObjects1.length = 0;
gdjs.Start_95splash2Code.GDgosplashObjects2.length = 0;
gdjs.Start_95splash2Code.GDbsObjects1.length = 0;
gdjs.Start_95splash2Code.GDbsObjects2.length = 0;
gdjs.Start_95splash2Code.GDNewObjectObjects1.length = 0;
gdjs.Start_95splash2Code.GDNewObjectObjects2.length = 0;

gdjs.Start_95splash2Code.eventsList0(runtimeScene);
return;

}

gdjs['Start_95splash2Code'] = gdjs.Start_95splash2Code;
