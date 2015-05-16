var textArea = document.getElementById("textArea");
var startButton = document.getElementById("startButton");
var begWindow = document.getElementById("begWindow");
var typeArea = document.getElementById("typeArea");
var timer = document.getElementById("timerWindow");
var time = 60;


textArea.readOnly = "true";

var initPage = function() {
	textArea.innerHTML = type[Math.floor(Math.random() *4)];
	begWindow.style.display = "none";
	textArea.style.display = "inline-block";
	typeArea.style.display = "inline-block";
	setTime();
	
};

 var setTime = function() {
 	timerWindow.innerHTML = "60 Seconds Remaining.";
 };


var myTimer = function() {

	var myTime = setInterval(function(){
		time--;
		timerWindow.innerHTML = time+" Seconds Remaining."; 
		if(time == 0)
		{
			clearInterval(myTime);
			textArea.remove();
			typeArea.remove();
			timerWindow.remove();
			calculateScore(typeArea.value);
			return;
		}
		if(time <= 5 )
		{
			timerWindow.style.color = "red";
		}
	}, 1000);
	timerWindow.style.color = "black";
	typeArea.removeEventListener("keydown", myTimer);
};

var calculateScore = function(text) {
	var scoreWindow = document.getElementById("scoreWindow");
	var split = text.split(" ");
	scoreWindow.style.display = "block";
	document.getElementById("scoreP").innerHTML = "You have typed at a rate of "+split.length+" word(s) per minute! I know this system is easy to cheat but hopefully you were honest. Press below to try again!"
	
}



startButton.addEventListener("click", initPage);
typeArea.addEventListener("keydown", myTimer);

var type1 = "Peter Pan. It wasn't a hot-water bottle or a teddy bear or a library book. Mrs. John folded down the sheets. It was a cutlass. With a sigh, she hung it on the hook behind the bedroom door, alongside the quiver of arrows and John's dressing gown. Both she and her husband liked to pretend it was not happening (because that's what grown-ups do when they are in trouble), but secretly they both knew: John was dreaming of Neverland again. After every dream, something was left behind in his bed next morning, like the stones around a dish after a serving of prunes. A sword here, a candle there, a bow, a medicine bottle, a top hat...The night after he dreamed of mermaids, a fishy smell hung about the stairs all day. The wardrobe was piled high with the dregs of dreams -- an alarm clock, an Indian head-dress, an eye-patch, a pirate's tricorn hat. (The worst nights were when John dreamed of Captain Hook.) Mrs. John plumped up the pillows with a brisk blow of her hand -- and a gunshot rang out through the whole house, waking the neighbours and terrifying the dog. The bullet shied about the room, bouncing off the lamp-stand and smashing a vase. Cautiously, with two fingers, Mrs. John drew the pistol from under the pillow and dropped it into the bin, like a kipper found to be not quite fresh. 'They are so real!' whimpered her husband from the doorway. 'These wretched dreams are just so real!' All over London and even as far afield as Fotheringdene and Grimswater, old boys were dreaming the same kind of dreams. Not young, silly boys but boys grown-up: cheerful, stolid boys who worked in banks or drove trains or grew strawberries or wrote plays or stood for Parliament. Cozy at home, surrounded by family and friends, they thought themselves comfortable and safe...until the dreams began. Now each night they dreamed of Neverland and woke to find leftovers in their beds daggers or coils of rope, a pile of leaves or a hook. And what did they have in common, these dreamers? Just one thing. They had all once been Boys in Neverland.";
var type2 = "If Queen Anne hadn’t suffered so badly from Gout and Dropsy, Reading might never have developed at all. In 1702 the unhealthy Queen Anne, looking for a place to ease her Royal infirmities, chanced upon Bath; and where Royalty goes, so too does society. In consequence, Reading, up until that time a small town on a smaller tributary of the Thames, became a busy staging post on the Bath road, later to become the A4, and ultimately the M4. The town was enriched by the wool trade and later played host to several large firms that were to become household names. By the time Huntley & Palmers biscuits began here in 1822, Simonds brewery was already well established; and when Suttons Seeds began in 1835 and Spongg's footcare in 1853, the town's prosperity was assured. -excerpt from A History of Reading It was the week following Easter in Reading, and no one could remember the last sunny day. Gray clouds swept across the sky, borne on a chill wind that cut like a knife. It seemed that spring had forsaken the town. The drab winter weather had clung to the town like a heavy smog, refusing to relinquish the season. Even the early bloomers were in denial. Only the bravest crocuses had graced the municipal park, and the daffodils, usually a welcome splash of color after a winter of grayness, had taken one sniff at the cold, damp air and postponed blooming for another year. A police officer was gazing with mixed emotions at the dreary cityscape from the seventh floor of Reading Central Police Station. She was thirty and attractive, dressed up and dated down, worked hard and felt awkward near anyone she didn't know. Her name was Mary. Mary Mary. And she was from Basingstoke, which is nothing to be ashamed of. 'Mary?' said an officer who was carrying a large potted plant in the manner of someone who thinks it is well outside his job description. 'Superintendent Briggs will see you now. How often do you water these things?' 'That one?' replied Mary without emotion. Never. It’s plastic. I’m a policeman, he said unhappily, not a sodding gardener. And he walked off, mumbling darkly to himself.";
var type3 = "She turned from the window, approached Briggs's closed door and paused. She gathered her thoughts, took a deep breath and stood up straight. Reading wouldn't have been everyone's choice for a transfer, but for Mary, Reading had one thing that no other city possessed: DCI Friedland Chymes. He was a veritable powerhouse of a sleuth whose career was a catalog of inspired police work, and his unparalleled detection skills had filled the newspaper columns for over two decades. Chymes was the reason Mary had joined the police force in the first place. Ever since her father had bought her a subscription to Amazing Crime Stories when she was nine, she'd been hooked. She had thrilled at The Mystery of the Wrong Nose, been galvanised by The Poisoned Shoe and inspired by The Sign of Three and a Half. Twenty-one years further on, Friedland was still a serious international player in the world of competitive detecting, and Mary had never missed an issue. Chymes was currently ranked by Amazing Crime second in their annual league rating, just behind Oxford's ever-popular Inspector Moose. Hmm, murmured Superintendent Briggs, eyeing Mary's job application carefully as she sat uncomfortably on a plastic chair in an office that was empty apart from a desk, two chairs, them- and a trombone lying on a tattered chaise longue. 'Your application is mostly very good, Mary,' he said approvingly. I see you were with Detective Inspector Hebden Flowwe. How did that go?";
var type4 = "HE HAD BEEN AWAKE ALL NIGHT, THINKING. He had gone without rest or nourishment. He did not need them. He had to devise his plan -- that was the only thing that mattered. At dawn, he had once again summoned the Council of Twelve telepathically. The session had been brief. He had simply informed them that the matter was in hand, that the project could not fail, and that he would soon put it into execution. The council members had not dared to ask him what his plans were. They had complete faith in him. After all, he was their superior. He had ordered them to return at noon for a meeting of the utmost importance. Now it was time to deal once more with those incompetents so hungry for wealth and power. He briskly straightened his long purple robe embroidered with gold thread, and strode off to the council chamber. When he opened the door with his usual abruptness, the room fell silent, as each councilor felt paralyzed by fear. Not one was bold enough to look him directly in the eye. The terrified Council of Twelve watched him: the Thirteenth Councilor, whose existence beyond those walls was a mystery to all, and who imposed his will on everyone. His image was not reflected in any mirror. He cast no shadow. He was not human. The old man stared at the flames blazing in the hearth. The Prophecy would be fulfilled. Now it was only a matter of days. He had waited for this moment, had longed for it impatiently. Soon all his questions would be answered. He shivered. It was foolish of him to have become attached to the child; he shouldn't have done that. The Prophecy had taken on another meaning: in those obscure pages where he had tried so hard to read the future and to understand the upheaval that was to come, he no longer saw anything except the fate of a girl named Jade.";
var type = [type1, type2, type3, type4];
