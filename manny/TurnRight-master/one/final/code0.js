gdjs.New_32sceneCode = {};


gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDNewObject2Objects1= [];
gdjs.New_32sceneCode.GDNewObject2Objects2= [];
gdjs.New_32sceneCode.GDNewObject3Objects1= [];
gdjs.New_32sceneCode.GDNewObject3Objects2= [];
gdjs.New_32sceneCode.GDNewObject4Objects1= [];
gdjs.New_32sceneCode.GDNewObject4Objects2= [];
gdjs.New_32sceneCode.GDNewObject5Objects1= [];
gdjs.New_32sceneCode.GDNewObject5Objects2= [];
gdjs.New_32sceneCode.GDNewObject6Objects1= [];
gdjs.New_32sceneCode.GDNewObject6Objects2= [];
gdjs.New_32sceneCode.GDNewObject7Objects1= [];
gdjs.New_32sceneCode.GDNewObject7Objects2= [];
gdjs.New_32sceneCode.GDNewObject8Objects1= [];
gdjs.New_32sceneCode.GDNewObject8Objects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition3IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition3IsTrue_1 = {val:false};

gdjs.New_32sceneCode.func = function(runtimeScene) {
gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject4Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject4Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject5Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject5Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject6Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject6Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject7Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject7Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject8Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject8Objects2.length = 0;


{

gdjs.New_32sceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setVariableNumber("Angle", 90);
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "time");
}}

}


{

gdjs.New_32sceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setVariableNumber("Speed", gdjs.New_32sceneCode.GDNewObjectObjects1[i].getVariableAsNumber("Speed") + (5));
}
}}

}


{

gdjs.New_32sceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setVariableNumber("Angle", gdjs.New_32sceneCode.GDNewObjectObjects1[i].getVariableAsNumber("Angle") + (2));
}
}}

}


{

gdjs.New_32sceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
gdjs.New_32sceneCode.GDNewObject6Objects1.createFrom(runtimeScene.getObjects("NewObject6"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtTools.common.clearEventsObjectsMap().addObjectsToEventsMap("NewObject", gdjs.New_32sceneCode.GDNewObjectObjects1).getEventsObjectsMap(), gdjs.evtTools.common.clearEventsObjectsMap().addObjectsToEventsMap("NewObject6", gdjs.New_32sceneCode.GDNewObject6Objects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(-1);
}}

}


{

gdjs.New_32sceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));

{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].addPolarForce((gdjs.New_32sceneCode.GDNewObjectObjects1[i].getVariableAsNumber("Angle")), (gdjs.New_32sceneCode.GDNewObjectObjects1[i].getVariableAsNumber("Speed")), 0);
}
}
{ //Subevents

{

gdjs.New_32sceneCode.GDNewObjectObjects2.createFrom(gdjs.New_32sceneCode.GDNewObjectObjects1);
gdjs.New_32sceneCode.GDNewObject2Objects2.createFrom(runtimeScene.getObjects("NewObject2"));
gdjs.New_32sceneCode.GDNewObject3Objects2.createFrom(runtimeScene.getObjects("NewObject3"));
gdjs.New_32sceneCode.GDNewObject4Objects2.createFrom(runtimeScene.getObjects("NewObject4"));

{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.New_32sceneCode.GDNewObjectObjects2.length !== 0 ? gdjs.New_32sceneCode.GDNewObjectObjects2[0] : null), false, "", 0);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject2Objects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject2Objects2[i].addPolarForce((gdjs.New_32sceneCode.GDNewObject2Objects2[i].getVariableAsNumber("Angle")), (gdjs.New_32sceneCode.GDNewObject2Objects2[i].getVariableAsNumber("Speed")), 0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject3Objects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject3Objects2[i].addPolarForce((gdjs.New_32sceneCode.GDNewObject3Objects2[i].getVariableAsNumber("Angle")), (gdjs.New_32sceneCode.GDNewObject3Objects2[i].getVariableAsNumber("Speed")), 0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject4Objects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject4Objects2[i].addPolarForce((gdjs.New_32sceneCode.GDNewObject4Objects2[i].getVariableAsNumber("Angle")), (gdjs.New_32sceneCode.GDNewObject4Objects2[i].getVariableAsNumber("Speed")), 0);
}
}
}

} //End of subevents

}


{

gdjs.New_32sceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
gdjs.New_32sceneCode.GDNewObject5Objects1.createFrom(runtimeScene.getObjects("NewObject5"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtTools.common.clearEventsObjectsMap().addObjectsToEventsMap("NewObject", gdjs.New_32sceneCode.GDNewObjectObjects1).getEventsObjectsMap(), gdjs.evtTools.common.clearEventsObjectsMap().addObjectsToEventsMap("NewObject5", gdjs.New_32sceneCode.GDNewObject5Objects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("NewVariable").setNumber(1);
}}

}


{

gdjs.New_32sceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
gdjs.New_32sceneCode.GDNewObject8Objects1.length = 0;

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() === -1;}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.evtTools.common.clearEventsObjectsMap().addObjectsToEventsMap("NewObject8", gdjs.New_32sceneCode.GDNewObject8Objects1).getEventsObjectsMap(), (( gdjs.New_32sceneCode.GDNewObjectObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDNewObjectObjects1[0].getPointX("l"))+50, (( gdjs.New_32sceneCode.GDNewObjectObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDNewObjectObjects1[0].getPointY("q")), "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject8Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject8Objects1[i].setCharacterSize(24);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject8Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject8Objects1[i].setString("YOU LOSE");
}
}{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.New_32sceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
gdjs.New_32sceneCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDNewObjectObjects1[i].getX() < 257 ) {
        gdjs.New_32sceneCode.condition0IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDNewObjectObjects1[k] = gdjs.New_32sceneCode.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObjectObjects1.length = k;}if ( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDNewObjectObjects1[i].getY() > 130 ) {
        gdjs.New_32sceneCode.condition1IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDNewObjectObjects1[k] = gdjs.New_32sceneCode.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObjectObjects1.length = k;}}
gdjs.New_32sceneCode.conditionTrue_1.val = true && gdjs.New_32sceneCode.condition0IsTrue_1.val && gdjs.New_32sceneCode.condition1IsTrue_1.val;
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setVariableNumber("race", 1);
}
}}

}


{

gdjs.New_32sceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
gdjs.New_32sceneCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDNewObjectObjects1[i].getY() < 130 ) {
        gdjs.New_32sceneCode.condition0IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDNewObjectObjects1[k] = gdjs.New_32sceneCode.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObjectObjects1.length = k;}if ( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDNewObjectObjects1[i].getX() < 257 ) {
        gdjs.New_32sceneCode.condition1IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDNewObjectObjects1[k] = gdjs.New_32sceneCode.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObjectObjects1.length = k;}}
gdjs.New_32sceneCode.conditionTrue_1.val = true && gdjs.New_32sceneCode.condition0IsTrue_1.val && gdjs.New_32sceneCode.condition1IsTrue_1.val;
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setVariableNumber("race", 2);
}
}}

}


{

gdjs.New_32sceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
gdjs.New_32sceneCode.condition1IsTrue_1.val = false;
gdjs.New_32sceneCode.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDNewObjectObjects1[i].getVariableAsNumber("race") == 2 ) {
        gdjs.New_32sceneCode.condition0IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDNewObjectObjects1[k] = gdjs.New_32sceneCode.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObjectObjects1.length = k;}if ( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDNewObjectObjects1[i].getX() > 257 ) {
        gdjs.New_32sceneCode.condition1IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDNewObjectObjects1[k] = gdjs.New_32sceneCode.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObjectObjects1.length = k;}if ( gdjs.New_32sceneCode.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDNewObjectObjects1[i].getY() < 130 ) {
        gdjs.New_32sceneCode.condition2IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDNewObjectObjects1[k] = gdjs.New_32sceneCode.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObjectObjects1.length = k;}}
}
gdjs.New_32sceneCode.conditionTrue_1.val = true && gdjs.New_32sceneCode.condition0IsTrue_1.val && gdjs.New_32sceneCode.condition1IsTrue_1.val && gdjs.New_32sceneCode.condition2IsTrue_1.val;
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setVariableNumber("race", 3);
}
}}

}


{

gdjs.New_32sceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
gdjs.New_32sceneCode.GDNewObject8Objects1.length = 0;

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
gdjs.New_32sceneCode.condition1IsTrue_1.val = false;
gdjs.New_32sceneCode.condition2IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDNewObjectObjects1[i].getVariableAsNumber("race") == 3 ) {
        gdjs.New_32sceneCode.condition0IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDNewObjectObjects1[k] = gdjs.New_32sceneCode.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObjectObjects1.length = k;}if ( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDNewObjectObjects1[i].getX() > 257 ) {
        gdjs.New_32sceneCode.condition1IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDNewObjectObjects1[k] = gdjs.New_32sceneCode.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObjectObjects1.length = k;}if ( gdjs.New_32sceneCode.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDNewObjectObjects1[i].getY() > 100 ) {
        gdjs.New_32sceneCode.condition2IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDNewObjectObjects1[k] = gdjs.New_32sceneCode.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObjectObjects1.length = k;}}
}
gdjs.New_32sceneCode.conditionTrue_1.val = true && gdjs.New_32sceneCode.condition0IsTrue_1.val && gdjs.New_32sceneCode.condition1IsTrue_1.val && gdjs.New_32sceneCode.condition2IsTrue_1.val;
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.evtTools.common.clearEventsObjectsMap().addObjectsToEventsMap("NewObject8", gdjs.New_32sceneCode.GDNewObject8Objects1).getEventsObjectsMap(), (( gdjs.New_32sceneCode.GDNewObjectObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDNewObjectObjects1[0].getPointX("l"))+50, (( gdjs.New_32sceneCode.GDNewObjectObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDNewObjectObjects1[0].getPointY("g")), "");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "time");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject8Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject8Objects1[i].setCharacterSize(24);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject8Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject8Objects1[i].setString("You Won With Time: " + runtimeScene.getVariables().getFromIndex(0).getAsString());
}
}{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.New_32sceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setVariableNumber("Speed", gdjs.New_32sceneCode.GDNewObjectObjects1[i].getVariableAsNumber("Speed") - (5));
}
}}

}


{

gdjs.New_32sceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDNewObjectObjects1[i].getVariableAsNumber("Speed") <= 0 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDNewObjectObjects1[k] = gdjs.New_32sceneCode.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObjectObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setVariableNumber("Speed", 0);
}
}}

}


{

gdjs.New_32sceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
gdjs.New_32sceneCode.GDNewObject7Objects1.createFrom(runtimeScene.getObjects("NewObject7"));

{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setVariableNumber("x", (gdjs.New_32sceneCode.GDNewObjectObjects1[i].getPointX("n")));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setVariableNumber("y", (gdjs.New_32sceneCode.GDNewObjectObjects1[i].getPointY("u")));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject7Objects1[i].setString(runtimeScene.getVariables().getFromIndex(0).getAsString());
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "time"));
}
}


{



}


{

gdjs.New_32sceneCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));

{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setDirectionOrAngle((gdjs.New_32sceneCode.GDNewObjectObjects1[i].getVariableAsNumber("Angle"))-90);
}
}
}

return;
}
gdjs['New_32sceneCode']= gdjs.New_32sceneCode;
