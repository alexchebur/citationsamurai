gdjs.Defeat_95splashCode = {};
gdjs.Defeat_95splashCode.GDgosplashObjects1= [];
gdjs.Defeat_95splashCode.GDgosplashObjects2= [];
gdjs.Defeat_95splashCode.GDbsObjects1= [];
gdjs.Defeat_95splashCode.GDbsObjects2= [];
gdjs.Defeat_95splashCode.GDBadlucksignObjects1= [];
gdjs.Defeat_95splashCode.GDBadlucksignObjects2= [];

gdjs.Defeat_95splashCode.conditionTrue_0 = {val:false};
gdjs.Defeat_95splashCode.condition0IsTrue_0 = {val:false};
gdjs.Defeat_95splashCode.condition1IsTrue_0 = {val:false};
gdjs.Defeat_95splashCode.condition2IsTrue_0 = {val:false};
gdjs.Defeat_95splashCode.conditionTrue_1 = {val:false};
gdjs.Defeat_95splashCode.condition0IsTrue_1 = {val:false};
gdjs.Defeat_95splashCode.condition1IsTrue_1 = {val:false};
gdjs.Defeat_95splashCode.condition2IsTrue_1 = {val:false};


gdjs.Defeat_95splashCode.eventsList0 = function(runtimeScene) {

{


gdjs.Defeat_95splashCode.condition0IsTrue_0.val = false;
{
{gdjs.Defeat_95splashCode.conditionTrue_1 = gdjs.Defeat_95splashCode.condition0IsTrue_0;
gdjs.Defeat_95splashCode.condition0IsTrue_1.val = false;
gdjs.Defeat_95splashCode.condition1IsTrue_1.val = false;
{
gdjs.Defeat_95splashCode.condition0IsTrue_1.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "fadein"));
}if ( gdjs.Defeat_95splashCode.condition0IsTrue_1.val ) {
{
gdjs.Defeat_95splashCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "fadein");
}}
gdjs.Defeat_95splashCode.conditionTrue_1.val = true && gdjs.Defeat_95splashCode.condition0IsTrue_1.val && gdjs.Defeat_95splashCode.condition1IsTrue_1.val;
}
}if (gdjs.Defeat_95splashCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bs"), gdjs.Defeat_95splashCode.GDbsObjects1);
{for(var i = 0, len = gdjs.Defeat_95splashCode.GDbsObjects1.length ;i < len;++i) {
    gdjs.Defeat_95splashCode.GDbsObjects1[i].setOpacity(gdjs.Defeat_95splashCode.GDbsObjects1[i].getOpacity() - (3));
}
}}

}


{


gdjs.Defeat_95splashCode.condition0IsTrue_0.val = false;
{
gdjs.Defeat_95splashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "fadeout");
}if (gdjs.Defeat_95splashCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bs"), gdjs.Defeat_95splashCode.GDbsObjects1);
{for(var i = 0, len = gdjs.Defeat_95splashCode.GDbsObjects1.length ;i < len;++i) {
    gdjs.Defeat_95splashCode.GDbsObjects1[i].setOpacity(gdjs.Defeat_95splashCode.GDbsObjects1[i].getOpacity() + (3));
}
}}

}


{


gdjs.Defeat_95splashCode.condition0IsTrue_0.val = false;
{
gdjs.Defeat_95splashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "fadein");
}if (gdjs.Defeat_95splashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main menu", true);
}}

}


{


gdjs.Defeat_95splashCode.condition0IsTrue_0.val = false;
{
gdjs.Defeat_95splashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Defeat_95splashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fadein");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fadeout");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "fadeout");
}{gdjs.evtTools.sound.playMusic(runtimeScene, "badluck.mp3", false, 30, 1);
}}

}


{


gdjs.Defeat_95splashCode.condition0IsTrue_0.val = false;
{
{gdjs.Defeat_95splashCode.conditionTrue_1 = gdjs.Defeat_95splashCode.condition0IsTrue_0;
gdjs.Defeat_95splashCode.condition0IsTrue_1.val = false;
gdjs.Defeat_95splashCode.condition1IsTrue_1.val = false;
{
gdjs.Defeat_95splashCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Defeat_95splashCode.condition0IsTrue_1.val ) {
{
gdjs.Defeat_95splashCode.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "fadein");
}}
gdjs.Defeat_95splashCode.conditionTrue_1.val = true && gdjs.Defeat_95splashCode.condition0IsTrue_1.val && gdjs.Defeat_95splashCode.condition1IsTrue_1.val;
}
}if (gdjs.Defeat_95splashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main menu", true);
}}

}


};

gdjs.Defeat_95splashCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Defeat_95splashCode.GDgosplashObjects1.length = 0;
gdjs.Defeat_95splashCode.GDgosplashObjects2.length = 0;
gdjs.Defeat_95splashCode.GDbsObjects1.length = 0;
gdjs.Defeat_95splashCode.GDbsObjects2.length = 0;
gdjs.Defeat_95splashCode.GDBadlucksignObjects1.length = 0;
gdjs.Defeat_95splashCode.GDBadlucksignObjects2.length = 0;

gdjs.Defeat_95splashCode.eventsList0(runtimeScene);
return;

}

gdjs['Defeat_95splashCode'] = gdjs.Defeat_95splashCode;
