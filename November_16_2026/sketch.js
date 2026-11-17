let e = new Entity("BOX", {x: 200, y: 200}, {x: 10 , y: 10});

function setup() 
{
	createCanvas(800, 600);

    inputManager.AddFunctionalityToKeyFromObject('w', e, e.MoveUp, e.Reset);
    inputManager.AddFunctionalityToKeyFromObject('s', e, e.MoveDown, e.Reset);
    inputManager.AddFunctionalityToKeyFromObject('a', e, e.MoveLeft, e.Reset);
    inputManager.AddFunctionalityToKeyFromObject('d', e, e.MoveRight, e.Reset);

}

function draw()
{
    background(55);
    I_Update(e, InBounds(e, {x: 800, y: 600}));
    I_Render(e);
}
