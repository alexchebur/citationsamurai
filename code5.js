gdjs.Start_95splashCode = {};
gdjs.Start_95splashCode.GDgosplashObjects1= [];
gdjs.Start_95splashCode.GDgosplashObjects2= [];
gdjs.Start_95splashCode.GDbsObjects1= [];
gdjs.Start_95splashCode.GDbsObjects2= [];

gdjs.Start_95splashCode.conditionTrue_0 = {val:false};
gdjs.Start_95splashCode.condition0IsTrue_0 = {val:false};
gdjs.Start_95splashCode.condition1IsTrue_0 = {val:false};
gdjs.Start_95splashCode.condition2IsTrue_0 = {val:false};
gdjs.Start_95splashCode.conditionTrue_1 = {val:false};
gdjs.Start_95splashCode.condition0IsTrue_1 = {val:false};
gdjs.Start_95splashCode.condition1IsTrue_1 = {val:false};
gdjs.Start_95splashCode.condition2IsTrue_1 = {val:false};


gdjs.Start_95splashCode.eventsList0 = function(runtimeScene) {

{


gdjs.Start_95splashCode.condition0IsTrue_0.val = false;
gdjs.Start_95splashCode.condition1IsTrue_0.val = false;
{
gdjs.Start_95splashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "fadein");
}if ( gdjs.Start_95splashCode.condition0IsTrue_0.val ) {
{
{gdjs.Start_95splashCode.conditionTrue_1 = gdjs.Start_95splashCode.condition1IsTrue_0;
gdjs.Start_95splashCode.condition0IsTrue_1.val = false;
{
gdjs.Start_95splashCode.condition0IsTrue_1.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "fadein"));
}gdjs.Start_95splashCode.conditionTrue_1.val = true && gdjs.Start_95splashCode.condition0IsTrue_1.val;
}
}}
if (gdjs.Start_95splashCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bs"), gdjs.Start_95splashCode.GDbsObjects1);
{for(var i = 0, len = gdjs.Start_95splashCode.GDbsObjects1.length ;i < len;++i) {
    gdjs.Start_95splashCode.GDbsObjects1[i].setOpacity(gdjs.Start_95splashCode.GDbsObjects1[i].getOpacity() - (3));
}
}}

}


{


gdjs.Start_95splashCode.condition0IsTrue_0.val = false;
{
gdjs.Start_95splashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "fadeout");
}if (gdjs.Start_95splashCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bs"), gdjs.Start_95splashCode.GDbsObjects1);
{for(var i = 0, len = gdjs.Start_95splashCode.GDbsObjects1.length ;i < len;++i) {
    gdjs.Start_95splashCode.GDbsObjects1[i].setOpacity(gdjs.Start_95splashCode.GDbsObjects1[i].getOpacity() + (3));
}
}}

}


{


gdjs.Start_95splashCode.condition0IsTrue_0.val = false;
{
gdjs.Start_95splashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "fadein");
}if (gdjs.Start_95splashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game window", true);
}}

}


{


gdjs.Start_95splashCode.condition0IsTrue_0.val = false;
{
gdjs.Start_95splashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Start_95splashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fadein");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fadeout");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "fadeout");
}}

}


{


gdjs.Start_95splashCode.condition0IsTrue_0.val = false;
gdjs.Start_95splashCode.condition1IsTrue_0.val = false;
{
gdjs.Start_95splashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "fadein");
}if ( gdjs.Start_95splashCode.condition0IsTrue_0.val ) {
{
{gdjs.Start_95splashCode.conditionTrue_1 = gdjs.Start_95splashCode.condition1IsTrue_0;
gdjs.Start_95splashCode.condition0IsTrue_1.val = false;
{
gdjs.Start_95splashCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}gdjs.Start_95splashCode.conditionTrue_1.val = true && gdjs.Start_95splashCode.condition0IsTrue_1.val;
}
}}
if (gdjs.Start_95splashCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game window", true);
}}

}


};

gdjs.Start_95splashCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_95splashCode.GDgosplashObjects1.length = 0;
gdjs.Start_95splashCode.GDgosplashObjects2.length = 0;
gdjs.Start_95splashCode.GDbsObjects1.length = 0;
gdjs.Start_95splashCode.GDbsObjects2.length = 0;

gdjs.Start_95splashCode.eventsList0(runtimeScene);
return;

}

gdjs['Start_95splashCode'] = gdjs.Start_95splashCode;
