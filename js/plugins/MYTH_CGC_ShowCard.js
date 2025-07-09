//=============================================================================
// MYTH_CGC_ShowCard
//=============================================================================
/*:
 * @target MZ
 * @author Isiah Brighton
 * @plugindesc Legacy plugin so those upgrading to CGC Core Engine v1.6.2 don't lose their MZ plugin commands
 * @url https://www.patreon.com/mythatelier
 *
 *
 * @command ShowCard
 * @text Show Card
 * 
 *     @arg skillID
 *     @type number
 *     @default 1
 *     @min 1
 *     @desc The skill ID of the card to be shown
 *     
 *     @arg x
 *     @type number
 *     @default 0
 *     @min -100
 *     @desc The x coordinate of the card. Card image is centered on its coordinates.
 *     
 *     @arg y
 *     @type number
 *     @default 0
 *     @min -100
 *     @desc The y coordinate of the card. Card image is centered on its coordinates.
 *     
 *     @arg angle
 *     @type number
 *     @default 0
 *     @min -360
 *     @desc The angle in degrees of rotation for the card
 *     
 *     @arg index
 *     @type number
 *     @default -1
 *     @min -1
 *     @desc Works just like Number when you Show Picture. If left at -1, it will find the next unused index.
 * 
 * @command ShowCardFromVariable
 * @text Show Card from Variable
 *
 *     @arg gameVariable
 *     @text Game Variable
 *     @type variable
 *     @default 1
 *     @min 1
 *     @desc The Game Variable containing the Skill ID of the card to be shown.
 *
 *     @arg x
 *     @type number
 *     @default 0
 *     @min -100
 *     @desc The x coordinate of the card. Card image is centered on its coordinates.
 *
 *     @arg y
 *     @type number
 *     @default 0
 *     @min -100
 *     @desc The y coordinate of the card. Card image is centered on its coordinates.
 *
 *     @arg angle
 *     @type number
 *     @default 0
 *     @min -360
 *     @desc The angle in degrees of rotation for the card
 *
 *     @arg index
 *     @type number
 *     @default -1
 *     @min -1
 *     @desc Works just like Number when you Show Picture. If left at -1, it will find the next unused index.
 *
 * @command HideCardIndex
 * @text Hide Card by index
 * 
 *     @arg index
 *     @type number
 *     @default 0
 *     @desc The index of the card to hide
 *     
 * @command HideCardID
 * @text Hide Card by skill ID
 * 
 *     @arg skillID
 *     @type number
 *     @default 1
 *     @min 1
 *     @desc The skill ID of the card to hide. If multiple cards of the same skill are on screen, the one with the highest index will be hidden.
 *
 * @command MoveCard
 * @text Move Card
 *
 *     @arg index
 *     @type number
 *     @default 0
 *     @min 0
 *     @desc The index of the card to move.
 *
 *     @arg x
 *     @type number
 *     @default 0
 *     @min -100
 *     @desc The x coordinate of the card to move to. Card image is centered on its coordinates.
 *
 *     @arg y
 *     @type number
 *     @default 0
 *     @min -100
 *     @desc The y coordinate of the card to move to. Card image is centered on its coordinates.
 *
 *     
 * @command HideAllCards
 * @text Hide All Cards
 * 
 * 
 * @help
 * 
 * If you're using MYTH_CGC_CoreEngine version 1.6.2 or higher, this plugin's
 * functionality has been consolidated into the Core Engine. That means that
 * you do not need this plugin, unless you are an MZ user who has upgraded from
 * an older version of CGC.
 * 
 * This version of the plugin will allow all previously-established plugin
 * commands to continue working, without needing you to migrate all command
 * calls manually to using the Core Engine versions of them.
 * 
 * If you are using RPG Maker MV, you do not need this plugin.
 * 
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * ShowCard [ID] [x] [y] [angle] [index]
 * 
 * replace the brackets with their respective fields. Index works just like
 * the Number when you Show Picture.
 * 
 * If Index is omitted, it will just find a new index and create a new card.
 * If angle is omitted, the angle will be 0.
 * 
 * HideCardID [ID]
 * 
 * This un-shows the card with the specified skill ID. If two or more cards 
 * have the same ID, it will hide the most recently added card.
 * 
 * HideCardIndex [index]
 * 
 * This hides the card at the specified index.
 *
 * HideAllCards
 * 
 * This will hide all cards.
 * 
 * MoveCard [index] [x] [y]
 * 
 * This moves the card of the specified index to the specified x and y 
 * coordinates.
 *
 * 
 * 
 * Note: Instead of raw numbers for all parameters except index, you
 * can also use \V[x] to input a Game Variable.
 * 
 * Ex:
 *     ShowCard \V[4] \V[5] \V[6] \V[7] 0
 * This shows a card whose ID is stored in Game Variable 4, at coordinates
 * stored in variables 5-6, at an angle stored in Varaible 7, and sets
 * its index to 0, replacing the card that was at that index.
 * 
 * 
 *
 * ============================================================================
 * Version History
 * ============================================================================
 *
 * CURRENT VERSION:
 *        - Reduced to a collection of Plugin Commands for RPG Maker MZ.
 *        - All functionality has been moved to the Core Engine.
 *        - If you are using RPG Maker MV, please disable this plugin.
 * 
 * v1.1.0 - Fixed save error if the player changes scenes before hiding
 *          cards. Implemented automatic cleanup.
 *          Added new MZ plugin parameter - Show Card From Variable
 *          Fixed bug where hiding a card would shift every other card's index
 *          Changed plugin name.
 *
 * v1.0.1 - Fixed HideCardIndex not properly removing card, added MZ plugin 
 *          commands
 *          
 * v1.0.0 - Added MoveCard, HideCardIndex, added MZ support
 * 
 * v0.2.0 - Fixed infinite loop error with plugin command calls
 * 
 * v0.1.0 - Released plugin internally
 *
 */
/*:ja
 * @target MZ
 * @author Isiah Brighton
 * @plugindesc CGC Core Engine v1.6.2にアップグレードしてもMZプラグインコマンドが失われないようにするためのレガシープラグイン。
 * @url https://www.patreon.com/mythatelier
 *
 *
* @command ShowCard
 * @text カードを見せる
 * 
 *     @arg skillID
 *     @type number
 *     @default 1
 *     @min 1
 *     @desc 表示するカードのスキルID
 *     
 *     @arg x
 *     @type number
 *     @default 0
 *     @min -100
 *     @desc カードのx座標。カード画像はその座標を中心に配置される。
 *     
 *     @arg y
 *     @type number
 *     @default 0
 *     @min -100
 *     @desc カードのy座標。カード画像はその座標を中心に配置される。
 *     
 *     @arg angle
 *     @type number
 *     @default 0
 *     @min -360
 *     @desc カードの回転角度（度単位）
 *     
 *     @arg index
 *     @type number
 *     @default -1
 *     @min -1
 *     @desc ピクチャを表示するときの番号と同じように動作する。もし-1のままなら、次の未使用のインデックスを見つける。
 * 
 * @command ShowCardFromVariable
 * @text 変数からカードを見せる
 *
 *     @arg gameVariable
 *     @text ゲーム変数
 *     @type variable
 *     @default 1
 *     @min 1
 *     @desc 表示するカードのスキルIDを含むゲーム変数。
 *
 *     @arg x
 *     @type number
 *     @default 0
 *     @min -100
 *     @desc カードのx座標。カード画像はその座標を中心に配置される。
 *
 *     @arg y
 *     @type number
 *     @default 0
 *     @min -100
 *     @desc カードのy座標。カード画像はその座標を中心に配置される。
 *
 *     @arg angle
 *     @type number
 *     @default 0
 *     @min -360
 *     @desc カードの回転角度（度単位）
 *
 *     @arg index
 *     @type number
 *     @default -1
 *     @min -1
 *     @desc ピクチャを表示するときの番号と同じように動作する。もし-1のままなら、次の未使用のインデックスを見つける。
 *
 * @command HideCardIndex
 * @text インデックスでカードを隠す
 * 
 *     @arg index
 *     @type number
 *     @default 0
 *     @desc 隠すカードのインデックス
 *     
 * @command HideCardID
 * @text スキルIDでカードを隠す
 * 
 *     @arg skillID
 *     @type number
 *     @default 1
 *     @min 1
 *     @desc非表示にするカードのスキルID。同じスキルのカードが画面上に複数ある場合、インデックスが最も高いカードが非表示になります。
 *
 * @command MoveCard
 * @text カードの移動
 *
 *     @arg index
 *     @type number
 *     @default 0
 *     @min 0
 *     @desc 移動するカードのインデックス。
 *
 *     @arg x
 *     @type number
 *     @default 0
 *     @min -100
 *     @desc 移動するカードのx座標。カード画像はその座標を中心に配置される。
 *
 *     @arg y
 *     @type number
 *     @default 0
 *     @min -100
 *     @desc 移動先のカードのy座標。カード画像はその座標を中心に配置される。
 *
 *     
 * @command HideAllCards
 * @text すべてのカードを隠す
 * 
 * 
 * @help
 * 
 * MYTH_CGC_CoreEngineバージョン1.6.2以上を使用している場合、
 * このプラグインの機能はCore Engineに統合されています。
 * つまり、CGCの古いバージョンからアップグレードしたMZユーザーでない限り、
 * このプラグインは必要ありません。
 * 
 * プラグインのこのバージョンは、すべてのコマンドコールを手動で
 * コアエンジンバージョンを使用するように移行する必要なく、
 * 以前に確立されたすべてのプラグインコマンドが機能し続けることを可能にします。
 * 
 * RPGツクールMVを使用している場合、このプラグインは必要ありません。
 * 
 *
 * ============================================================================
 *プラグインコマンド
 * ============================================================================
 *
 * ShowCard [ID] [x] [y] [angle] [index]
 * 括弧をそれぞれのフィールドに置き換える。Indexは、Show Pictureのときの
* Numberと同じように機能します。
 * 
 * Indexが省略された場合、新しいIndexを見つけ、新しいカードを作成する。
 * 角度が省略された場合、角度は0になる。
 * 
 * HideCardID [ID]
 * 
 * 指定されたスキル ID を持つカードの表示を解除する。
 * 同じIDを持つカードが2枚以上ある場合、最近追加されたカードを非表示にする。
 * 
 * HideCardIndex [index]
 * 
 * 指定されたインデックスのカードを隠す。
 *
 * HideAllCards
 * 
 * これですべてのカードが隠される。
 * 
 * MoveCard [index] [x] [y]
 * 
 * 指定されたインデックスのカードを、指定されたx、y座標に移動する。
 * 
 *
 * 
 * 
 * 注：index以外のパラメータは生の数値の代わりに、
 * \V[x] を使用してゲーム変数を入力することもできます。
 * 
 * Ex:
 *     ShowCard \V[4] \V[5] \V[6] \V[7] 0
 * ゲーム変数4にIDが格納されているカードを、変数5～6に格納されている座標に、
 * 変数7に格納されている角度で表示し、そのインデックスを0に設定し、
 * インデックスにあったカードを置き換える。
 *
 * ============================================================================
 * バージョン履歴
 * ============================================================================
 *
 * 現在のバージョンです：
 *        - RPGツクールMZのプラグインコマンド集になりました。
 *        - 全ての機能はコアエンジンに移行しました。
 *        - RPGツクールMVをお使いの方は、このプラグインを無効にしてください。
 * 
* v1.1.0 - カードを隠す前にシーンを変更した場合の保存エラーを修正。
*          自動クリーンアップを実装。
 *          新しいMZプラグインパラメータ、Show Card From Variableを追加。
 *          カードを隠すと、他のカードのインデックスがずれるバグを修正。
 *          プラグイン名を変更。
 *
 * v1.0.1 - HideCardIndexが適切にカードを削除していなかった問題を修正。
 *          
 *          
 * v1.0.0 - MoveCard、HideCardIndexの追加、MZサポートの追加
 * 
 * v0.2.0 - プラグインコマンド呼び出しの無限ループエラーを修正
 * 
 * v0.1.0 - プラグインを内部リリース
 *
 */


var Myth = Myth || {};
Myth.CGC = Myth.CGC || {};


if (Myth.Util.usingMZ)
{

	PluginManager.registerCommand("MYTH_CGC_ShowCard", "ShowCard", args =>
	{
		var interpreter = Myth.Util.getInterpreter();
		if (!interpreter) return;
		var skillId = Number(args.skillID);
		var x = Number(args.x);
		var y = Number(args.y);
		var angle = Number(args.angle);
		var index = Number(args.index);
		if (index == -1)
			index = undefined;
		interpreter.showCard(skillId, x, y, angle, index);
	});

	PluginManager.registerCommand("MYTH_CGC_ShowCard", "ShowCardFromVariable", args =>
	{
		var interpreter = Myth.Util.getInterpreter();
		if (!interpreter) return;
		var gameVariable = Number(args.gameVariable);
		var skillId = $gameVariables.value(gameVariable);
		var x = Number(args.x);
		var y = Number(args.y);
		var angle = Number(args.angle);
		var index = Number(args.index);
		if (index == -1)
			index = undefined;
		interpreter.showCard(skillId, x, y, angle, index);
	});

	PluginManager.registerCommand("MYTH_CGC_ShowCard", "HideCardIndex", args =>
	{
		var interpreter = Myth.Util.getInterpreter();
		if (!interpreter) return;
		var index = Number(args.index);
		interpreter.hideCardByIndex(index);
	});

	PluginManager.registerCommand("MYTH_CGC_ShowCard", "HideCardID", args =>
	{
		var interpreter = Myth.Util.getInterpreter();
		if (!interpreter) return;
		var skillId = Number(args.skillID);
		interpreter.hideCard(skillId);
	});

	PluginManager.registerCommand("MYTH_CGC_ShowCard", "HideAllCards", args =>
	{
		var interpreter = Myth.Util.getInterpreter();
		if (!interpreter) return;
		interpreter.hideAllCards();
	});

	PluginManager.registerCommand("MYTH_CGC_ShowCard", "MoveCard", args =>
	{
		var interpreter = Myth.Util.getInterpreter();
		if (!interpreter) return;
		var index = Number(args.index);
		var x = Number(args.x);
		var y = Number(args.y);

		interpreter.moveCard(index, x, y);
	});
}
else
	console.error("MYTH_CGC_ShowCard is obsolete in RPG Maker MV, as its functionality has been moved to CoreEngine. Please disable ShowCard in the Plugin Manager.")

