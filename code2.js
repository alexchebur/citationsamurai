gdjs.Game_32windowCode = {};
gdjs.Game_32windowCode.GDplayerObjects1= [];
gdjs.Game_32windowCode.GDplayerObjects2= [];
gdjs.Game_32windowCode.GDbackground2Objects1= [];
gdjs.Game_32windowCode.GDbackground2Objects2= [];
gdjs.Game_32windowCode.GDbackground1Objects1= [];
gdjs.Game_32windowCode.GDbackground1Objects2= [];
gdjs.Game_32windowCode.GDbirdsObjects1= [];
gdjs.Game_32windowCode.GDbirdsObjects2= [];
gdjs.Game_32windowCode.GDsignObjects1= [];
gdjs.Game_32windowCode.GDsignObjects2= [];
gdjs.Game_32windowCode.GDlivesObjects1= [];
gdjs.Game_32windowCode.GDlivesObjects2= [];
gdjs.Game_32windowCode.GDscrollObjects1= [];
gdjs.Game_32windowCode.GDscrollObjects2= [];
gdjs.Game_32windowCode.GDLabelObjects1= [];
gdjs.Game_32windowCode.GDLabelObjects2= [];
gdjs.Game_32windowCode.GDSpeedLabelObjects1= [];
gdjs.Game_32windowCode.GDSpeedLabelObjects2= [];
gdjs.Game_32windowCode.GDNewObjectObjects1= [];
gdjs.Game_32windowCode.GDNewObjectObjects2= [];
gdjs.Game_32windowCode.GDAlarmObjects1= [];
gdjs.Game_32windowCode.GDAlarmObjects2= [];
gdjs.Game_32windowCode.GDProgress_95ScrollsObjects1= [];
gdjs.Game_32windowCode.GDProgress_95ScrollsObjects2= [];
gdjs.Game_32windowCode.GDScrollNumberObjects1= [];
gdjs.Game_32windowCode.GDScrollNumberObjects2= [];
gdjs.Game_32windowCode.GDCheckboxObjects1= [];
gdjs.Game_32windowCode.GDCheckboxObjects2= [];

gdjs.Game_32windowCode.conditionTrue_0 = {val:false};
gdjs.Game_32windowCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32windowCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32windowCode.condition2IsTrue_0 = {val:false};
gdjs.Game_32windowCode.condition3IsTrue_0 = {val:false};
gdjs.Game_32windowCode.conditionTrue_1 = {val:false};
gdjs.Game_32windowCode.condition0IsTrue_1 = {val:false};
gdjs.Game_32windowCode.condition1IsTrue_1 = {val:false};
gdjs.Game_32windowCode.condition2IsTrue_1 = {val:false};
gdjs.Game_32windowCode.condition3IsTrue_1 = {val:false};


gdjs.Game_32windowCode.mapOfGDgdjs_46Game_9532windowCode_46GDscrollObjects1Objects = Hashtable.newFrom({"scroll": gdjs.Game_32windowCode.GDscrollObjects1});gdjs.Game_32windowCode.mapOfGDgdjs_46Game_9532windowCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Game_32windowCode.GDplayerObjects1});gdjs.Game_32windowCode.mapOfGDgdjs_46Game_9532windowCode_46GDscrollObjects1Objects = Hashtable.newFrom({"scroll": gdjs.Game_32windowCode.GDscrollObjects1});gdjs.Game_32windowCode.mapOfGDgdjs_46Game_9532windowCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Game_32windowCode.GDplayerObjects1});gdjs.Game_32windowCode.mapOfGDgdjs_46Game_9532windowCode_46GDscrollObjects1Objects = Hashtable.newFrom({"scroll": gdjs.Game_32windowCode.GDscrollObjects1});gdjs.Game_32windowCode.mapOfGDgdjs_46Game_9532windowCode_46GDCheckboxObjects1Objects = Hashtable.newFrom({"Checkbox": gdjs.Game_32windowCode.GDCheckboxObjects1});gdjs.Game_32windowCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Game_32windowCode.GDplayerObjects1);

gdjs.Game_32windowCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32windowCode.conditionTrue_1 = gdjs.Game_32windowCode.condition0IsTrue_0;
gdjs.Game_32windowCode.condition0IsTrue_1.val = false;
gdjs.Game_32windowCode.condition1IsTrue_1.val = false;
{
gdjs.Game_32windowCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Game_32windowCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game_32windowCode.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32windowCode.GDplayerObjects1[i].isCurrentAnimationName("sword_swing")) ) {
        gdjs.Game_32windowCode.condition1IsTrue_1.val = true;
        gdjs.Game_32windowCode.GDplayerObjects1[k] = gdjs.Game_32windowCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32windowCode.GDplayerObjects1.length = k;}}
gdjs.Game_32windowCode.conditionTrue_1.val = true && gdjs.Game_32windowCode.condition0IsTrue_1.val && gdjs.Game_32windowCode.condition1IsTrue_1.val;
}
}if (gdjs.Game_32windowCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32windowCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Game_32windowCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDplayerObjects1[i].setAnimationName("sword_swing");
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDplayerObjects1[i].playAnimation();
}
}}

}


{


gdjs.Game_32windowCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32windowCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if (gdjs.Game_32windowCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Game_32windowCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.Game_32windowCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDplayerObjects1[i].setAnimationName("idle");
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDplayerObjects1[i].playAnimation();
}
}}

}


{


gdjs.Game_32windowCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32windowCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32windowCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Alarm"), gdjs.Game_32windowCode.GDAlarmObjects1);
gdjs.copyArray(runtimeScene.getObjects("Label"), gdjs.Game_32windowCode.GDLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpeedLabel"), gdjs.Game_32windowCode.GDSpeedLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("birds"), gdjs.Game_32windowCode.GDbirdsObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Game_32windowCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("scroll"), gdjs.Game_32windowCode.GDscrollObjects1);
{runtimeScene.getVariables().getFromIndex(0).setNumber(40);
}{for(var i = 0, len = gdjs.Game_32windowCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDplayerObjects1[i].setAnimationName("idle");
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDplayerObjects1[i].playAnimation();
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDbirdsObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDbirdsObjects1[i].addPolarForce(180, 10, 1);
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDscrollObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDscrollObjects1[i].addPolarForce(90, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 1);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(50);
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.Game_32windowCode.GDscrollObjects1.length !== 0 ? gdjs.Game_32windowCode.GDscrollObjects1[0] : null), (gdjs.Game_32windowCode.GDLabelObjects1.length !== 0 ? gdjs.Game_32windowCode.GDLabelObjects1[0] : null));
}{gdjs.evtTools.sound.playMusic(runtimeScene, "japanese-melody-plucked_120bpm2.mp3", true, 50, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "speedtimer");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(1), "От того, насколько ясно составлен договор, зависит судьба\nпредприятия, его сотрудников и их семей.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(1), "Кратко - то есть без лишних слов, но не в ущерб смыслу. Благодаря краткости из текста пропадает мусор, мы тратим меньше времени на чтение и быстрее получаем результат.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(1), "Ясно - то есть так, чтобы мысль была понятна сразу, а не после расшифровки. Благодаря ясности нам проще понять сложные вещи и объяснить их окружающим.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(1), "Информационный стиль заставляет писать просто, даже в ущерб статусу и респектабельности.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(1), "Культ слов - это вера в то, что определенные слова обладают волшебной силой в отрыве от смысла.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(1), "Смысл важнее слов.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(1), "Главное в сильном тексте – забота о читателе.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(1), "Чтобы текст стал сильным, начните с того, чтобы он был зачем-то полезен читателю. Просто текст никому не нужен, даже красивый.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(1), "У автора в руках огромная власть. Он формирует картину мира других людей. Что он напишет - о том люди и думают.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(1), "Где власть - там и ответственность. Автор должен всегда быть честным перед читателем, предупреждать проблемы и не бояться прямо о них говорить. Честность - лучшая стратегия.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(1), "Нет ни одной ситуации, когда одну и ту же мысль стоит выражать сложнее, а не проще.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(1), "Фразы вроде «всем известно» и «Не секрет» - это ловушка. Если что-то и так известно, то об этом незачем писать.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(1), "Быть вежливым - хорошо. Но когда вежливость становится формальностью или перерастает в лакейство - это плохо.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(1), "Самая прочная оценка - та, которую вы даете сами на основании собственного опыта.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(1), "Если вы читаете текст и в нём вдруг густо запахло Союзом журналистов РСФСР - кто-то накидал в него штампов.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(1), "Избавляйтесь от бюрократского языка везде, где можете. Первый шаг - удаляйте паразиты времени, это проще всего.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(1), "Уважение к читателю должно проявляться в искренней заботе о нём.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(1), "Эвфемизмы не только неинформативные, но и малодушные. Они показывают неуважение к собеседнику, трусость и нарциссизм одновременно.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(1), "Мямлить, расшаркиваться и обтекать вокруг неудобных тем легко. Это не признак деликатности, так умеют все. А чтобы называть вещи своими именами, нужны характер и воля.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(1), "Эвфемизм - это симптом болезни. Но вместо того, чтобы вскрыть болезнь и попытаться ее вылечить, общество придумывает, как бы сделать вид, что болезни нет.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(2), "Большинство людей понимают, что, называя страну демократической, мы ее хвалим; поэтому защитники любого режима настаивают на том, что он демократический, и боятся, что если слову придадут определенное значение, они не смогут его употреблять.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(2), "Нет слов плохих вообще, неприемлемых вообще: каждое слово хорошо на своем месте, впору и кстати.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(2), "Плохие авторы, особенно пишущие на политические, научные и социологические темы, находятся во власти представления, будто латинские и греческие слова благороднее саксонских.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(2), "Часто смешиваются несовместимые метафоры. — верный признак того, что автору неинтересно, о чем он говорит.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(2), "В наше время политическая речь и письмо в большой своей части — оправдание того, чему нет оправдания.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(2), "Пока прочитаешь наш план эвакуации — сгоришь вместе с планом!");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(2), "Легче разбить десять французских армий, чем понять разницу между глаголами совершенного и несовершенного вида.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(2), "Как красив русский язык! Все преимущества немецкого без его ужасной грубости.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(2), "Никогда не употребляйте иностранных слов. Русский язык так богат и гибок, что нам нечего брать у тех, кто беднее нас.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(2), "Русский язык в умелых руках и опытных устах красив, певуч, выразителен, гибок, послушен, ловок и вместителен.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(2), "Нам дан во владение самый богатый, меткий, могучий и поистине волшебный русский язык.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(2), "Русский язык — язык, созданный для поэзии, он необычайно богат и примечателен главным образом тонкостью оттенков.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(2), "Говорить на политтехнологической фене стало в наше время так же модно, как в девяностых годах было модно намекать на знакомство с «понятиями.»");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(2), "Человеку не нужно трех сосен, чтобы заблудиться, — ему достаточно двух существительных.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(2), "Минимализьм, парадигма, дискурс, конь-септ-уализьм… С раннего детства слышу я слова сии. Но что они означают — так до сих пор и не понял.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(2), "Государство – это язык. Каков язык – таков и порядок.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(2), "Такие хвосты, как: «заслуживает самого пристального внимания» или «открывает широкие перспективы сотрудничества», спасают любое предложение от ухаба в конце.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(2), "Лучшие книги, понял он, говорят тебе то, что ты уже сам знаешь.");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(2), "Многословие легко переходит в пустословие. Возьмем такой пример: «Наш командир еще за 15 минут до своей смерти был жив».");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getVariables().getFromIndex(2), "Говори так, чтобы тебя нельзя было не понять.");
}{gdjs.evtsExt__ArrayTools__Shuffle.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__ArrayTools__Shuffle.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(2)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.Game_32windowCode.GDLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDLabelObjects1[i].returnVariable(gdjs.Game_32windowCode.GDLabelObjects1[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1).getChild(gdjs.randomInRange(0, 9))));
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDLabelObjects1[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.Game_32windowCode.GDLabelObjects1[i].getVariables().getFromIndex(0))));
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs.Game_32windowCode.GDAlarmObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDAlarmObjects1[i].hide();
}
}{runtimeScene.getVariables().get("ScrollsLeft").setNumber(20);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "countdown");
}{for(var i = 0, len = gdjs.Game_32windowCode.GDSpeedLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDSpeedLabelObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("birds"), gdjs.Game_32windowCode.GDbirdsObjects1);

gdjs.Game_32windowCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32windowCode.GDbirdsObjects1.length;i<l;++i) {
    if ( gdjs.Game_32windowCode.GDbirdsObjects1[i].getX() < -(50) ) {
        gdjs.Game_32windowCode.condition0IsTrue_0.val = true;
        gdjs.Game_32windowCode.GDbirdsObjects1[k] = gdjs.Game_32windowCode.GDbirdsObjects1[i];
        ++k;
    }
}
gdjs.Game_32windowCode.GDbirdsObjects1.length = k;}if (gdjs.Game_32windowCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32windowCode.GDbirdsObjects1 */
{for(var i = 0, len = gdjs.Game_32windowCode.GDbirdsObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDbirdsObjects1[i].setX(900);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Game_32windowCode.GDplayerObjects1);

gdjs.Game_32windowCode.condition0IsTrue_0.val = false;
gdjs.Game_32windowCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32windowCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32windowCode.GDplayerObjects1[i].isCurrentAnimationName("sword_swing") ) {
        gdjs.Game_32windowCode.condition0IsTrue_0.val = true;
        gdjs.Game_32windowCode.GDplayerObjects1[k] = gdjs.Game_32windowCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32windowCode.GDplayerObjects1.length = k;}if ( gdjs.Game_32windowCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game_32windowCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32windowCode.GDplayerObjects1[i].getAnimationFrame() == 0 ) {
        gdjs.Game_32windowCode.condition1IsTrue_0.val = true;
        gdjs.Game_32windowCode.GDplayerObjects1[k] = gdjs.Game_32windowCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32windowCode.GDplayerObjects1.length = k;}}
if (gdjs.Game_32windowCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sword-swoosh_D_minor.mp3", 1, false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Game_32windowCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("scroll"), gdjs.Game_32windowCode.GDscrollObjects1);

gdjs.Game_32windowCode.condition0IsTrue_0.val = false;
gdjs.Game_32windowCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32windowCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32windowCode.mapOfGDgdjs_46Game_9532windowCode_46GDscrollObjects1Objects, gdjs.Game_32windowCode.mapOfGDgdjs_46Game_9532windowCode_46GDplayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Game_32windowCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32windowCode.conditionTrue_1 = gdjs.Game_32windowCode.condition1IsTrue_0;
gdjs.Game_32windowCode.condition0IsTrue_1.val = false;
{
gdjs.Game_32windowCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}gdjs.Game_32windowCode.conditionTrue_1.val = true && gdjs.Game_32windowCode.condition0IsTrue_1.val;
}
}}
if (gdjs.Game_32windowCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Label"), gdjs.Game_32windowCode.GDLabelObjects1);
/* Reuse gdjs.Game_32windowCode.GDscrollObjects1 */
{for(var i = 0, len = gdjs.Game_32windowCode.GDscrollObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDscrollObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDscrollObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDscrollObjects1[i].addPolarForce(90, 500, 1);
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDLabelObjects1[i].hide();
}
}{runtimeScene.getVariables().get("ScrollsLeft").sub(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "ding-sound-effect_2.mp3", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Game_32windowCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("scroll"), gdjs.Game_32windowCode.GDscrollObjects1);

gdjs.Game_32windowCode.condition0IsTrue_0.val = false;
gdjs.Game_32windowCode.condition1IsTrue_0.val = false;
gdjs.Game_32windowCode.condition2IsTrue_0.val = false;
{
gdjs.Game_32windowCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32windowCode.mapOfGDgdjs_46Game_9532windowCode_46GDscrollObjects1Objects, gdjs.Game_32windowCode.mapOfGDgdjs_46Game_9532windowCode_46GDplayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Game_32windowCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32windowCode.conditionTrue_1 = gdjs.Game_32windowCode.condition1IsTrue_0;
gdjs.Game_32windowCode.condition0IsTrue_1.val = false;
gdjs.Game_32windowCode.condition1IsTrue_1.val = false;
{
gdjs.Game_32windowCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if ( gdjs.Game_32windowCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game_32windowCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32windowCode.GDplayerObjects1[i].getAnimation() == 0 ) {
        gdjs.Game_32windowCode.condition1IsTrue_1.val = true;
        gdjs.Game_32windowCode.GDplayerObjects1[k] = gdjs.Game_32windowCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32windowCode.GDplayerObjects1.length = k;}}
gdjs.Game_32windowCode.conditionTrue_1.val = true && gdjs.Game_32windowCode.condition0IsTrue_1.val && gdjs.Game_32windowCode.condition1IsTrue_1.val;
}
}if ( gdjs.Game_32windowCode.condition1IsTrue_0.val ) {
{
{gdjs.Game_32windowCode.conditionTrue_1 = gdjs.Game_32windowCode.condition2IsTrue_0;
gdjs.Game_32windowCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9081860);
}
}}
}
if (gdjs.Game_32windowCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Alarm"), gdjs.Game_32windowCode.GDAlarmObjects1);
gdjs.copyArray(runtimeScene.getObjects("Label"), gdjs.Game_32windowCode.GDLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("lives"), gdjs.Game_32windowCode.GDlivesObjects1);
/* Reuse gdjs.Game_32windowCode.GDscrollObjects1 */
{for(var i = 0, len = gdjs.Game_32windowCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDlivesObjects1[i].setAnimation(gdjs.Game_32windowCode.GDlivesObjects1[i].getAnimation() + (1));
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDscrollObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDscrollObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDscrollObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDscrollObjects1[i].addPolarForce(90, 500, 1);
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDLabelObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "alarmsign");
}{for(var i = 0, len = gdjs.Game_32windowCode.GDAlarmObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDAlarmObjects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "oshybka-2.mp3", false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Checkbox"), gdjs.Game_32windowCode.GDCheckboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("scroll"), gdjs.Game_32windowCode.GDscrollObjects1);

gdjs.Game_32windowCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32windowCode.conditionTrue_1 = gdjs.Game_32windowCode.condition0IsTrue_0;
gdjs.Game_32windowCode.condition0IsTrue_1.val = false;
gdjs.Game_32windowCode.condition1IsTrue_1.val = false;
gdjs.Game_32windowCode.condition2IsTrue_1.val = false;
{
gdjs.Game_32windowCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32windowCode.mapOfGDgdjs_46Game_9532windowCode_46GDscrollObjects1Objects, gdjs.Game_32windowCode.mapOfGDgdjs_46Game_9532windowCode_46GDCheckboxObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Game_32windowCode.condition0IsTrue_1.val ) {
{
gdjs.Game_32windowCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}if ( gdjs.Game_32windowCode.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game_32windowCode.GDscrollObjects1.length;i<l;++i) {
    if ( gdjs.Game_32windowCode.GDscrollObjects1[i].isCurrentAnimationName("scroll_whole") ) {
        gdjs.Game_32windowCode.condition2IsTrue_1.val = true;
        gdjs.Game_32windowCode.GDscrollObjects1[k] = gdjs.Game_32windowCode.GDscrollObjects1[i];
        ++k;
    }
}
gdjs.Game_32windowCode.GDscrollObjects1.length = k;}}
}
gdjs.Game_32windowCode.conditionTrue_1.val = true && gdjs.Game_32windowCode.condition0IsTrue_1.val && gdjs.Game_32windowCode.condition1IsTrue_1.val && gdjs.Game_32windowCode.condition2IsTrue_1.val;
}
}if (gdjs.Game_32windowCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Alarm"), gdjs.Game_32windowCode.GDAlarmObjects1);
gdjs.copyArray(runtimeScene.getObjects("Label"), gdjs.Game_32windowCode.GDLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("lives"), gdjs.Game_32windowCode.GDlivesObjects1);
/* Reuse gdjs.Game_32windowCode.GDscrollObjects1 */
{for(var i = 0, len = gdjs.Game_32windowCode.GDscrollObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDscrollObjects1[i].setY(-(100));
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDscrollObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDscrollObjects1[i].setAnimation(0);
}
}{runtimeScene.getVariables().getFromIndex(0).add(2);
}{for(var i = 0, len = gdjs.Game_32windowCode.GDscrollObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDscrollObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDscrollObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDscrollObjects1[i].addPolarForce(90, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 1);
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDLabelObjects1[i].returnVariable(gdjs.Game_32windowCode.GDLabelObjects1[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(2).getChild(gdjs.randomInRange(0, 19))));
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDLabelObjects1[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.Game_32windowCode.GDLabelObjects1[i].getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDLabelObjects1[i].hide(false);
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(0, 1));
}{gdjs.evtTools.sound.playSound(runtimeScene, "oshybka-2.mp3", false, 50, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "alarmsign");
}{for(var i = 0, len = gdjs.Game_32windowCode.GDAlarmObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDAlarmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDlivesObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDlivesObjects1[i].setAnimation(gdjs.Game_32windowCode.GDlivesObjects1[i].getAnimation() + (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("scroll"), gdjs.Game_32windowCode.GDscrollObjects1);

gdjs.Game_32windowCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32windowCode.GDscrollObjects1.length;i<l;++i) {
    if ( gdjs.Game_32windowCode.GDscrollObjects1[i].getY() >= 600 ) {
        gdjs.Game_32windowCode.condition0IsTrue_0.val = true;
        gdjs.Game_32windowCode.GDscrollObjects1[k] = gdjs.Game_32windowCode.GDscrollObjects1[i];
        ++k;
    }
}
gdjs.Game_32windowCode.GDscrollObjects1.length = k;}if (gdjs.Game_32windowCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Label"), gdjs.Game_32windowCode.GDLabelObjects1);
/* Reuse gdjs.Game_32windowCode.GDscrollObjects1 */
{for(var i = 0, len = gdjs.Game_32windowCode.GDscrollObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDscrollObjects1[i].setY(-(100));
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDscrollObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDscrollObjects1[i].setAnimation(0);
}
}{runtimeScene.getVariables().getFromIndex(0).add(2);
}{for(var i = 0, len = gdjs.Game_32windowCode.GDscrollObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDscrollObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDscrollObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDscrollObjects1[i].addPolarForce(90, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 1);
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDLabelObjects1[i].returnVariable(gdjs.Game_32windowCode.GDLabelObjects1[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(2).getChild(gdjs.randomInRange(0, 19))));
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDLabelObjects1[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.Game_32windowCode.GDLabelObjects1[i].getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDLabelObjects1[i].hide(false);
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(0, 1));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Label"), gdjs.Game_32windowCode.GDLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScrollNumber"), gdjs.Game_32windowCode.GDScrollNumberObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpeedLabel"), gdjs.Game_32windowCode.GDSpeedLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("scroll"), gdjs.Game_32windowCode.GDscrollObjects1);
{for(var i = 0, len = gdjs.Game_32windowCode.GDLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDLabelObjects1[i].putAroundObject((gdjs.Game_32windowCode.GDscrollObjects1.length !== 0 ? gdjs.Game_32windowCode.GDscrollObjects1[0] : null), 0, 0);
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDSpeedLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDSpeedLabelObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDScrollNumberObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDScrollNumberObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("ScrollsLeft")));
}
}}

}


{


gdjs.Game_32windowCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32windowCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.5, "alarmsign");
}if (gdjs.Game_32windowCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Alarm"), gdjs.Game_32windowCode.GDAlarmObjects1);
{for(var i = 0, len = gdjs.Game_32windowCode.GDAlarmObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDAlarmObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("scroll"), gdjs.Game_32windowCode.GDscrollObjects1);

gdjs.Game_32windowCode.condition0IsTrue_0.val = false;
gdjs.Game_32windowCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32windowCode.GDscrollObjects1.length;i<l;++i) {
    if ( gdjs.Game_32windowCode.GDscrollObjects1[i].getY() <= -(90) ) {
        gdjs.Game_32windowCode.condition0IsTrue_0.val = true;
        gdjs.Game_32windowCode.GDscrollObjects1[k] = gdjs.Game_32windowCode.GDscrollObjects1[i];
        ++k;
    }
}
gdjs.Game_32windowCode.GDscrollObjects1.length = k;}if ( gdjs.Game_32windowCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32windowCode.conditionTrue_1 = gdjs.Game_32windowCode.condition1IsTrue_0;
gdjs.Game_32windowCode.condition0IsTrue_1.val = false;
gdjs.Game_32windowCode.condition1IsTrue_1.val = false;
{
gdjs.Game_32windowCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if ( gdjs.Game_32windowCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game_32windowCode.GDscrollObjects1.length;i<l;++i) {
    if ( gdjs.Game_32windowCode.GDscrollObjects1[i].getY() > -(100) ) {
        gdjs.Game_32windowCode.condition1IsTrue_1.val = true;
        gdjs.Game_32windowCode.GDscrollObjects1[k] = gdjs.Game_32windowCode.GDscrollObjects1[i];
        ++k;
    }
}
gdjs.Game_32windowCode.GDscrollObjects1.length = k;}}
gdjs.Game_32windowCode.conditionTrue_1.val = true && gdjs.Game_32windowCode.condition0IsTrue_1.val && gdjs.Game_32windowCode.condition1IsTrue_1.val;
}
}}
if (gdjs.Game_32windowCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Label"), gdjs.Game_32windowCode.GDLabelObjects1);
{for(var i = 0, len = gdjs.Game_32windowCode.GDLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDLabelObjects1[i].returnVariable(gdjs.Game_32windowCode.GDLabelObjects1[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1).getChild(gdjs.randomInRange(0, 19))));
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDLabelObjects1[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.Game_32windowCode.GDLabelObjects1[i].getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("scroll"), gdjs.Game_32windowCode.GDscrollObjects1);

gdjs.Game_32windowCode.condition0IsTrue_0.val = false;
gdjs.Game_32windowCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32windowCode.GDscrollObjects1.length;i<l;++i) {
    if ( gdjs.Game_32windowCode.GDscrollObjects1[i].getY() <= -(90) ) {
        gdjs.Game_32windowCode.condition0IsTrue_0.val = true;
        gdjs.Game_32windowCode.GDscrollObjects1[k] = gdjs.Game_32windowCode.GDscrollObjects1[i];
        ++k;
    }
}
gdjs.Game_32windowCode.GDscrollObjects1.length = k;}if ( gdjs.Game_32windowCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32windowCode.conditionTrue_1 = gdjs.Game_32windowCode.condition1IsTrue_0;
gdjs.Game_32windowCode.condition0IsTrue_1.val = false;
gdjs.Game_32windowCode.condition1IsTrue_1.val = false;
{
gdjs.Game_32windowCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}if ( gdjs.Game_32windowCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game_32windowCode.GDscrollObjects1.length;i<l;++i) {
    if ( gdjs.Game_32windowCode.GDscrollObjects1[i].getY() > 100 ) {
        gdjs.Game_32windowCode.condition1IsTrue_1.val = true;
        gdjs.Game_32windowCode.GDscrollObjects1[k] = gdjs.Game_32windowCode.GDscrollObjects1[i];
        ++k;
    }
}
gdjs.Game_32windowCode.GDscrollObjects1.length = k;}}
gdjs.Game_32windowCode.conditionTrue_1.val = true && gdjs.Game_32windowCode.condition0IsTrue_1.val && gdjs.Game_32windowCode.condition1IsTrue_1.val;
}
}}
if (gdjs.Game_32windowCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Label"), gdjs.Game_32windowCode.GDLabelObjects1);
{for(var i = 0, len = gdjs.Game_32windowCode.GDLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDLabelObjects1[i].returnVariable(gdjs.Game_32windowCode.GDLabelObjects1[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(2).getChild(gdjs.randomInRange(0, 19))));
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDLabelObjects1[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.Game_32windowCode.GDLabelObjects1[i].getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("lives"), gdjs.Game_32windowCode.GDlivesObjects1);

gdjs.Game_32windowCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_32windowCode.GDlivesObjects1.length;i<l;++i) {
    if ( gdjs.Game_32windowCode.GDlivesObjects1[i].getAnimation() > 4 ) {
        gdjs.Game_32windowCode.condition0IsTrue_0.val = true;
        gdjs.Game_32windowCode.GDlivesObjects1[k] = gdjs.Game_32windowCode.GDlivesObjects1[i];
        ++k;
    }
}
gdjs.Game_32windowCode.GDlivesObjects1.length = k;}if (gdjs.Game_32windowCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Game_32windowCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("scroll"), gdjs.Game_32windowCode.GDscrollObjects1);
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "countdown");
}{for(var i = 0, len = gdjs.Game_32windowCode.GDscrollObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDscrollObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Game_32windowCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Game_32windowCode.GDplayerObjects1[i].setAnimationSpeedScale(0);
}
}}

}


{


gdjs.Game_32windowCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32windowCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("ScrollsLeft")) == 0;
}if (gdjs.Game_32windowCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Victory_splash", true);
}}

}


{


gdjs.Game_32windowCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32windowCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "countdown");
}if (gdjs.Game_32windowCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Defeat_splash", true);
}}

}


};

gdjs.Game_32windowCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32windowCode.GDplayerObjects1.length = 0;
gdjs.Game_32windowCode.GDplayerObjects2.length = 0;
gdjs.Game_32windowCode.GDbackground2Objects1.length = 0;
gdjs.Game_32windowCode.GDbackground2Objects2.length = 0;
gdjs.Game_32windowCode.GDbackground1Objects1.length = 0;
gdjs.Game_32windowCode.GDbackground1Objects2.length = 0;
gdjs.Game_32windowCode.GDbirdsObjects1.length = 0;
gdjs.Game_32windowCode.GDbirdsObjects2.length = 0;
gdjs.Game_32windowCode.GDsignObjects1.length = 0;
gdjs.Game_32windowCode.GDsignObjects2.length = 0;
gdjs.Game_32windowCode.GDlivesObjects1.length = 0;
gdjs.Game_32windowCode.GDlivesObjects2.length = 0;
gdjs.Game_32windowCode.GDscrollObjects1.length = 0;
gdjs.Game_32windowCode.GDscrollObjects2.length = 0;
gdjs.Game_32windowCode.GDLabelObjects1.length = 0;
gdjs.Game_32windowCode.GDLabelObjects2.length = 0;
gdjs.Game_32windowCode.GDSpeedLabelObjects1.length = 0;
gdjs.Game_32windowCode.GDSpeedLabelObjects2.length = 0;
gdjs.Game_32windowCode.GDNewObjectObjects1.length = 0;
gdjs.Game_32windowCode.GDNewObjectObjects2.length = 0;
gdjs.Game_32windowCode.GDAlarmObjects1.length = 0;
gdjs.Game_32windowCode.GDAlarmObjects2.length = 0;
gdjs.Game_32windowCode.GDProgress_95ScrollsObjects1.length = 0;
gdjs.Game_32windowCode.GDProgress_95ScrollsObjects2.length = 0;
gdjs.Game_32windowCode.GDScrollNumberObjects1.length = 0;
gdjs.Game_32windowCode.GDScrollNumberObjects2.length = 0;
gdjs.Game_32windowCode.GDCheckboxObjects1.length = 0;
gdjs.Game_32windowCode.GDCheckboxObjects2.length = 0;

gdjs.Game_32windowCode.eventsList0(runtimeScene);
return;

}

gdjs['Game_32windowCode'] = gdjs.Game_32windowCode;
