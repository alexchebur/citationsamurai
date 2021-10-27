gdjs.Main_32menuCode = {};
gdjs.Main_32menuCode.GDNewObjectObjects1= [];
gdjs.Main_32menuCode.GDNewObjectObjects2= [];
gdjs.Main_32menuCode.GDnewgameObjects1= [];
gdjs.Main_32menuCode.GDnewgameObjects2= [];
gdjs.Main_32menuCode.GDgameinfoObjects1= [];
gdjs.Main_32menuCode.GDgameinfoObjects2= [];
gdjs.Main_32menuCode.GDtitlesignObjects1= [];
gdjs.Main_32menuCode.GDtitlesignObjects2= [];
gdjs.Main_32menuCode.GDblack_95screenObjects1= [];
gdjs.Main_32menuCode.GDblack_95screenObjects2= [];
gdjs.Main_32menuCode.GDbulletObjects1= [];
gdjs.Main_32menuCode.GDbulletObjects2= [];

gdjs.Main_32menuCode.conditionTrue_0 = {val:false};
gdjs.Main_32menuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32menuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32menuCode.condition2IsTrue_0 = {val:false};
gdjs.Main_32menuCode.condition3IsTrue_0 = {val:false};
gdjs.Main_32menuCode.conditionTrue_1 = {val:false};
gdjs.Main_32menuCode.condition0IsTrue_1 = {val:false};
gdjs.Main_32menuCode.condition1IsTrue_1 = {val:false};
gdjs.Main_32menuCode.condition2IsTrue_1 = {val:false};
gdjs.Main_32menuCode.condition3IsTrue_1 = {val:false};


gdjs.Main_32menuCode.mapOfGDgdjs_46Main_9532menuCode_46GDnewgameObjects1Objects = Hashtable.newFrom({"newgame": gdjs.Main_32menuCode.GDnewgameObjects1});gdjs.Main_32menuCode.mapOfGDgdjs_46Main_9532menuCode_46GDgameinfoObjects1Objects = Hashtable.newFrom({"gameinfo": gdjs.Main_32menuCode.GDgameinfoObjects1});gdjs.Main_32menuCode.mapOfGDgdjs_46Main_9532menuCode_46GDnewgameObjects1Objects = Hashtable.newFrom({"newgame": gdjs.Main_32menuCode.GDnewgameObjects1});gdjs.Main_32menuCode.mapOfGDgdjs_46Main_9532menuCode_46GDgameinfoObjects1Objects = Hashtable.newFrom({"gameinfo": gdjs.Main_32menuCode.GDgameinfoObjects1});gdjs.Main_32menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("newgame"), gdjs.Main_32menuCode.GDnewgameObjects1);

gdjs.Main_32menuCode.condition0IsTrue_0.val = false;
gdjs.Main_32menuCode.condition1IsTrue_0.val = false;
gdjs.Main_32menuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_32menuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32menuCode.mapOfGDgdjs_46Main_9532menuCode_46GDnewgameObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32menuCode.condition1IsTrue_0.val ) {
{
{gdjs.Main_32menuCode.conditionTrue_1 = gdjs.Main_32menuCode.condition2IsTrue_0;
gdjs.Main_32menuCode.condition0IsTrue_1.val = false;
{
gdjs.Main_32menuCode.condition0IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "blackscreen");
}gdjs.Main_32menuCode.conditionTrue_1.val = true && gdjs.Main_32menuCode.condition0IsTrue_1.val;
}
}}
}
if (gdjs.Main_32menuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start_splash", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gameinfo"), gdjs.Main_32menuCode.GDgameinfoObjects1);

gdjs.Main_32menuCode.condition0IsTrue_0.val = false;
gdjs.Main_32menuCode.condition1IsTrue_0.val = false;
gdjs.Main_32menuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_32menuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32menuCode.mapOfGDgdjs_46Main_9532menuCode_46GDgameinfoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32menuCode.condition1IsTrue_0.val ) {
{
{gdjs.Main_32menuCode.conditionTrue_1 = gdjs.Main_32menuCode.condition2IsTrue_0;
gdjs.Main_32menuCode.condition0IsTrue_1.val = false;
{
gdjs.Main_32menuCode.condition0IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "blackscreen");
}gdjs.Main_32menuCode.conditionTrue_1.val = true && gdjs.Main_32menuCode.condition0IsTrue_1.val;
}
}}
}
if (gdjs.Main_32menuCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", true);
}}

}


{


gdjs.Main_32menuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32menuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("gameinfo"), gdjs.Main_32menuCode.GDgameinfoObjects1);
gdjs.copyArray(runtimeScene.getObjects("newgame"), gdjs.Main_32menuCode.GDnewgameObjects1);
gdjs.copyArray(runtimeScene.getObjects("titlesign"), gdjs.Main_32menuCode.GDtitlesignObjects1);
{for(var i = 0, len = gdjs.Main_32menuCode.GDnewgameObjects1.length ;i < len;++i) {
    gdjs.Main_32menuCode.GDnewgameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32menuCode.GDgameinfoObjects1.length ;i < len;++i) {
    gdjs.Main_32menuCode.GDgameinfoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32menuCode.GDtitlesignObjects1.length ;i < len;++i) {
    gdjs.Main_32menuCode.GDtitlesignObjects1[i].addPolarForce(90, 6, 1);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "background.mp3", true, 50, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "blackscreen");
}}

}


{


gdjs.Main_32menuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "blackscreen");
}if (gdjs.Main_32menuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("black_screen"), gdjs.Main_32menuCode.GDblack_95screenObjects1);
{for(var i = 0, len = gdjs.Main_32menuCode.GDblack_95screenObjects1.length ;i < len;++i) {
    gdjs.Main_32menuCode.GDblack_95screenObjects1[i].setOpacity(gdjs.Main_32menuCode.GDblack_95screenObjects1[i].getOpacity() - (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("newgame"), gdjs.Main_32menuCode.GDnewgameObjects1);

gdjs.Main_32menuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32menuCode.mapOfGDgdjs_46Main_9532menuCode_46GDnewgameObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32menuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.Main_32menuCode.GDbulletObjects1);
{for(var i = 0, len = gdjs.Main_32menuCode.GDbulletObjects1.length ;i < len;++i) {
    gdjs.Main_32menuCode.GDbulletObjects1[i].setY(502);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gameinfo"), gdjs.Main_32menuCode.GDgameinfoObjects1);

gdjs.Main_32menuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32menuCode.mapOfGDgdjs_46Main_9532menuCode_46GDgameinfoObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32menuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.Main_32menuCode.GDbulletObjects1);
{for(var i = 0, len = gdjs.Main_32menuCode.GDbulletObjects1.length ;i < len;++i) {
    gdjs.Main_32menuCode.GDbulletObjects1[i].setY(556);
}
}}

}


};

gdjs.Main_32menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32menuCode.GDNewObjectObjects1.length = 0;
gdjs.Main_32menuCode.GDNewObjectObjects2.length = 0;
gdjs.Main_32menuCode.GDnewgameObjects1.length = 0;
gdjs.Main_32menuCode.GDnewgameObjects2.length = 0;
gdjs.Main_32menuCode.GDgameinfoObjects1.length = 0;
gdjs.Main_32menuCode.GDgameinfoObjects2.length = 0;
gdjs.Main_32menuCode.GDtitlesignObjects1.length = 0;
gdjs.Main_32menuCode.GDtitlesignObjects2.length = 0;
gdjs.Main_32menuCode.GDblack_95screenObjects1.length = 0;
gdjs.Main_32menuCode.GDblack_95screenObjects2.length = 0;
gdjs.Main_32menuCode.GDbulletObjects1.length = 0;
gdjs.Main_32menuCode.GDbulletObjects2.length = 0;

gdjs.Main_32menuCode.eventsList0(runtimeScene);
return;

}

gdjs['Main_32menuCode'] = gdjs.Main_32menuCode;
