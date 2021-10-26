gdjs.CreditsCode = {};
gdjs.CreditsCode.GDNewObjectObjects1= [];
gdjs.CreditsCode.GDNewObjectObjects2= [];
gdjs.CreditsCode.GDcredits_95listObjects1= [];
gdjs.CreditsCode.GDcredits_95listObjects2= [];
gdjs.CreditsCode.GDbuttonbackObjects1= [];
gdjs.CreditsCode.GDbuttonbackObjects2= [];

gdjs.CreditsCode.conditionTrue_0 = {val:false};
gdjs.CreditsCode.condition0IsTrue_0 = {val:false};
gdjs.CreditsCode.condition1IsTrue_0 = {val:false};
gdjs.CreditsCode.condition2IsTrue_0 = {val:false};
gdjs.CreditsCode.conditionTrue_1 = {val:false};
gdjs.CreditsCode.condition0IsTrue_1 = {val:false};
gdjs.CreditsCode.condition1IsTrue_1 = {val:false};
gdjs.CreditsCode.condition2IsTrue_1 = {val:false};


gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("buttonback"), gdjs.CreditsCode.GDbuttonbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("credits_list"), gdjs.CreditsCode.GDcredits_95listObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDcredits_95listObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDcredits_95listObjects1[i].addPolarForce(270, 25, 1);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "background.mp3", true, 50, 1);
}{for(var i = 0, len = gdjs.CreditsCode.GDbuttonbackObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDbuttonbackObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "credits");
}}

}


{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
{gdjs.CreditsCode.conditionTrue_1 = gdjs.CreditsCode.condition1IsTrue_0;
gdjs.CreditsCode.condition0IsTrue_1.val = false;
{
gdjs.CreditsCode.condition0IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "credits");
}gdjs.CreditsCode.conditionTrue_1.val = true && gdjs.CreditsCode.condition0IsTrue_1.val;
}
}}
if (gdjs.CreditsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main menu", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("credits_list"), gdjs.CreditsCode.GDcredits_95listObjects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CreditsCode.GDcredits_95listObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDcredits_95listObjects1[i].getY() < -(2560) ) {
        gdjs.CreditsCode.condition0IsTrue_0.val = true;
        gdjs.CreditsCode.GDcredits_95listObjects1[k] = gdjs.CreditsCode.GDcredits_95listObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDcredits_95listObjects1.length = k;}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main menu", true);
}}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDNewObjectObjects1.length = 0;
gdjs.CreditsCode.GDNewObjectObjects2.length = 0;
gdjs.CreditsCode.GDcredits_95listObjects1.length = 0;
gdjs.CreditsCode.GDcredits_95listObjects2.length = 0;
gdjs.CreditsCode.GDbuttonbackObjects1.length = 0;
gdjs.CreditsCode.GDbuttonbackObjects2.length = 0;

gdjs.CreditsCode.eventsList0(runtimeScene);
return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
