gdjs.Victory_95splashCode = {};
gdjs.Victory_95splashCode.GDgosplashObjects1= [];
gdjs.Victory_95splashCode.GDgosplashObjects2= [];
gdjs.Victory_95splashCode.GDbsObjects1= [];
gdjs.Victory_95splashCode.GDbsObjects2= [];
gdjs.Victory_95splashCode.GDBadlucksignObjects1= [];
gdjs.Victory_95splashCode.GDBadlucksignObjects2= [];
gdjs.Victory_95splashCode.GDVictorysignObjects1= [];
gdjs.Victory_95splashCode.GDVictorysignObjects2= [];
gdjs.Victory_95splashCode.GDNewObjectObjects1= [];
gdjs.Victory_95splashCode.GDNewObjectObjects2= [];

gdjs.Victory_95splashCode.conditionTrue_0 = {val:false};
gdjs.Victory_95splashCode.condition0IsTrue_0 = {val:false};
gdjs.Victory_95splashCode.condition1IsTrue_0 = {val:false};
gdjs.Victory_95splashCode.condition2IsTrue_0 = {val:false};
gdjs.Victory_95splashCode.conditionTrue_1 = {val:false};
gdjs.Victory_95splashCode.condition0IsTrue_1 = {val:false};
gdjs.Victory_95splashCode.condition1IsTrue_1 = {val:false};
gdjs.Victory_95splashCode.condition2IsTrue_1 = {val:false};


gdjs.Victory_95splashCode.eventsList0 = function(runtimeScene) {

{


gdjs.Victory_95splashCode.condition0IsTrue_0.val = false;
{
{gdjs.Victory_95splashCode.conditionTrue_1 = gdjs.Victory_95splashCode.condition0IsTrue_0;
gdjs.Victory_95splashCode.condition0IsTrue_1.val = false;
gdjs.Victory_95splashCode.condition1IsTrue_1.val = false;
{
gdjs.Victory_95splashCode.condition0IsTrue_1.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "fadein"));
}if ( gdjs.Victory_95splashCode.condition0IsTrue_1.val ) {
{
gdjs.Victory_95splashCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "fadein");
}}
gdjs.Victory_95splashCode.conditionTrue_1.val = true && gdjs.Victory_95splashCode.condition0IsTrue_1.val && gdjs.Victory_95splashCode.condition1IsTrue_1.val;
}
}if (gdjs.Victory_95splashCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bs"), gdjs.Victory_95splashCode.GDbsObjects1);
{for(var i = 0, len = gdjs.Victory_95splashCode.GDbsObjects1.length ;i < len;++i) {
    gdjs.Victory_95splashCode.GDbsObjects1[i].setOpacity(gdjs.Victory_95splashCode.GDbsObjects1[i].getOpacity() - (3));
}
}}

}


{


gdjs.Victory_95splashCode.condition0IsTrue_0.val = false;
{
gdjs.Victory_95splashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "fadeout");
}if (gdjs.Victory_95splashCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bs"), gdjs.Victory_95splashCode.GDbsObjects1);
{for(var i = 0, len = gdjs.Victory_95splashCode.GDbsObjects1.length ;i < len;++i) {
    gdjs.Victory_95splashCode.GDbsObjects1[i].setOpacity(gdjs.Victory_95splashCode.GDbsObjects1[i].getOpacity() + (3));
}
}}

}


{


gdjs.Victory_95splashCode.condition0IsTrue_0.val = false;
{
gdjs.Victory_95splashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 60, "fadein");
}if (gdjs.Victory_95splashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main menu", true);
}}

}


{


gdjs.Victory_95splashCode.condition0IsTrue_0.val = false;
{
gdjs.Victory_95splashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Victory_95splashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fadein");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fadeout");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "fadeout");
}{gdjs.evtTools.sound.playMusic(runtimeScene, "victory.mp3", false, 30, 1);
}}

}


{


gdjs.Victory_95splashCode.condition0IsTrue_0.val = false;
{
{gdjs.Victory_95splashCode.conditionTrue_1 = gdjs.Victory_95splashCode.condition0IsTrue_0;
gdjs.Victory_95splashCode.condition0IsTrue_1.val = false;
gdjs.Victory_95splashCode.condition1IsTrue_1.val = false;
{
gdjs.Victory_95splashCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Victory_95splashCode.condition0IsTrue_1.val ) {
{
gdjs.Victory_95splashCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "fadein");
}}
gdjs.Victory_95splashCode.conditionTrue_1.val = true && gdjs.Victory_95splashCode.condition0IsTrue_1.val && gdjs.Victory_95splashCode.condition1IsTrue_1.val;
}
}if (gdjs.Victory_95splashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main menu", true);
}}

}


};

gdjs.Victory_95splashCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Victory_95splashCode.GDgosplashObjects1.length = 0;
gdjs.Victory_95splashCode.GDgosplashObjects2.length = 0;
gdjs.Victory_95splashCode.GDbsObjects1.length = 0;
gdjs.Victory_95splashCode.GDbsObjects2.length = 0;
gdjs.Victory_95splashCode.GDBadlucksignObjects1.length = 0;
gdjs.Victory_95splashCode.GDBadlucksignObjects2.length = 0;
gdjs.Victory_95splashCode.GDVictorysignObjects1.length = 0;
gdjs.Victory_95splashCode.GDVictorysignObjects2.length = 0;
gdjs.Victory_95splashCode.GDNewObjectObjects1.length = 0;
gdjs.Victory_95splashCode.GDNewObjectObjects2.length = 0;

gdjs.Victory_95splashCode.eventsList0(runtimeScene);
return;

}

gdjs['Victory_95splashCode'] = gdjs.Victory_95splashCode;
