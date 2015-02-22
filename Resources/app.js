// ***** View Requires *****
var Constants = require('/views/Constants');
var HomeMenuView = require('/views/HomeMenuView');
var DirectionView = require('/views/DirectionView');
var LoginView = require('/views/LoginView');
var TopBarView = require('/views/TopBarView');

// ***** Controller Requires *****
var SessionController = require('/controllers/SessionController');
var CrashDetectController = require('/controllers/CrashDetectController');
var WindowController = require('/controllers/WindowController');

// ***** View Objects *****
var homeMenuView = new HomeMenuView();
var directionView = new DirectionView();
var loginView = new LoginView();
var topBar = new TopBarView();

// ***** Controller Objects *****
var sessionController = new SessionController();
var crashDetectController = new CrashDetectController();
var windowController = new WindowController();

// Uncomment the next line to test Login Screen
//Ti.App.Properties.setBool('usedBefore', false);
var usedBefore = Ti.App.Properties.getBool('usedBefore');
if (!usedBefore){
	Ti.App.Properties.setBool('usedBefore', true);
	sessionController.Login();
} else {
	windowController.goToHomeWindow();
}