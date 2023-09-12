<script>
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';

	const chatColors = ['#FE016A', '#F2FF00', '#00EAE5', '#03FF59', '#9667F6', '#ED72B1'];

	export const messages = [
		{
			user: 'gabiii98',
			userColor: chatColors[0],
			text: 'you heard about this new survey?'
		},
		{
			user: 'pombaaveganaa',
			userColor: chatColors[1],
			text: 'about us, right?'
		},
		{
			user: 'gabiii98',
			userColor: chatColors[0],
			text: 'yep, what did you think?'
		},
		{
			user: 'pombaaveganaa',
			userColor: chatColors[1],
			text: 'from what I saw, cool'
		},
		{
			user: 'gabiii98',
			userColor: chatColors[0],
			text: "what's your profile vibe, ya think?"
		},
		{
			user: 'pombaaveganaa',
			userColor: chatColors[1],
			text: 'guess'
		},
		{
			user: 'gabiii98',
			userColor: chatColors[0],
			text: 'gamer at heart'
		},
		{
			user: 'pombaaveganaa',
			userColor: chatColors[1],
			text: 'sure thing! ;)'
		},
		{
			user: 'pombaaveganaa',
			userColor: chatColors[1],
			text: 'wby?'
		},
		{
			user: 'gabiii98',
			userColor: chatColors[0],
			text: 'hard core, ofc'
		},
		{
			user: 'gabiii98',
			userColor: chatColors[0],
			text: 'my sister is a sugar crush, obvs'
		},
		{
			user: 'pombaaveganaa',
			userColor: chatColors[1],
			text: 'u saw the tinder profiles?'
		},
		{
			user: 'gabiii98',
			userColor: chatColors[0],
			text: "they're AI generated images"
		},
		{
			user: 'pombaaveganaa',
			userColor: chatColors[1],
			text: 'wow, I thought they were real'
		},
		{
			user: 'gabiii98',
			userColor: chatColors[0],
			text: 'same'
		},
		{
			user: 'gabiii98',
			userColor: chatColors[0],
			text: 'another round, fam?'
		},
		{
			user: 'pombaaveganaa',
			userColor: chatColors[1],
			text: 'x2?'
		},
		{
			user: 'gabiii98',
			userColor: chatColors[0],
			text: 'hold on, lemme see if @mathluffy_ wanna join us'
		},
		{
			user: 'pombaaveganaa',
			userColor: chatColors[1],
			text: 'my mate @pdrcs is eating, will join soon'
		},
		{
			user: 'gabiii98',
			userColor: chatColors[0],
			text: "k, I'll finish reading the research in the meantime"
		},
		{
			user: 'mathluffy_',
			userColor: chatColors[2],
			text: 'haha cuties'
		},
		{
			user: 'gabiii98',
			userColor: chatColors[0],
			text: 'whom?'
		},
		{
			user: 'mathluffy_',
			userColor: chatColors[2],
			text: 'who thought of this chat'
		},
		{
			user: 'pombaaveganaa',
			userColor: chatColors[1],
			text: 'odd people'
		},
		{
			user: 'gabiii98',
			userColor: chatColors[0],
			text: 'genius'
		},
		{
			user: 'pdrcs',
			userColor: chatColors[3],
			text: 'time for another round, peeps!'
		}
	];

	let chat = [];
	let i = 0;

	setInterval(() => {
		if (i >= messages.length) i = 0;
		addMessage(messages[i]);
		i++;
	}, 1500);

	const addMessage = (message) => {
		const newMessage = {
			id: chat.length,
			user: message.user || 'user',
			userColor: message.userColor || '#FFF',
			text: message.text || '...'
		};

		chat = [...chat, newMessage];
	};

	const sendRandomEmoji = () => {
		const emojis = [
			'😂',
			'😊',
			'🤔',
			'🤩',
			'🤯',
			'🥳',
			'👍',
			'👎',
			'🤗',
			'😴',
			'😜',
			'🤫',
			'🤢',
			'🤮',
			'🥺',
			'🤖',
			'👻',
			'👽',
			'🤡',
			'💩',
			'🙀',
			'🐶',
			'🐱',
			'🐭',
			'🐹',
			'🐰',
			'🦊',
			'🐻',
			'🐼',
			'🐨',
			'🐯',
			'🦁',
			'🐮',
			'🐷',
			'🐸',
			'🐵',
			'🐔',
			'🐧',
			'🐦',
			'🐤',
			'🦆',
			'🦅',
			'🦉',
			'🦇',
			'🐺',
			'🐗',
			'🐴',
			'🦄',
			'🐝',
			'🐛',
			'🦋',
			'🐌',
			'🐞',
			'🐜',
			'🦟',
			'🦗',
			'🕷️',
			'🦂',
			'🐢',
			'🐍',
			'🦎',
			'🦖',
			'🦕',
			'🐙',
			'🦑',
			'🦐',
			'🦞',
			'🦀',
			'🐡',
			'🐠',
			'🐟',
			'🐬',
			'🐳',
			'🐋',
			'🦈',
			'🐊',
			'🐢',
			'🦕',
			'🦖'
		];
		const randomIndex = Math.floor(Math.random() * emojis.length);
		const emoji = emojis[randomIndex];
		const message = { user: 'me', userColor: chatColors[4], text: emoji };
		addMessage(message);
	};
</script>

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<div id="chat-container" class="flex flex-col w-full h-full p-5 overflow-hidden">
	<div
		id="messages"
		class="flex flex-col justify-end w-full h-full pb-2 gap-2 overflow-hidden grow"
	>
		{#each chat as message (message.id)}
			<div
				class="flex flex-row gap-1"
				in:fly={{ key: message.id }}
				out:fly={{ key: message.id }}
				animate:flip
			>
				<p class="user-text" style="color: {message.userColor}">
					{message.user}:
				</p>
				<p class="message-text">
					{message.text}
				</p>
			</div>
		{/each}
	</div>

	<div id="warning" class="flex flex-row w-full h-8 p-2 gap-1">
		<p class="">Chat exclusivo para verificados</p>
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
			<path
				d="M8 14.5C9.28558 14.5 10.5423 14.1188 11.6112 13.4046C12.6801 12.6903 13.5132 11.6752 14.0052 10.4874C14.4972 9.29972 14.6259 7.99279 14.3751 6.73191C14.1243 5.47104 13.5052 4.31285 12.5962 3.40381C11.6872 2.49476 10.529 1.8757 9.26809 1.6249C8.00721 1.37409 6.70028 1.50281 5.51256 1.99478C4.32484 2.48675 3.30968 3.31987 2.59545 4.38879C1.88122 5.45771 1.5 6.71442 1.5 8C1.50182 9.72335 2.18722 11.3756 3.40581 12.5942C4.6244 13.8128 6.27665 14.4982 8 14.5ZM8 2.5C9.0878 2.5 10.1512 2.82257 11.0556 3.42692C11.9601 4.03127 12.6651 4.89025 13.0813 5.89524C13.4976 6.90023 13.6065 8.0061 13.3943 9.073C13.1821 10.1399 12.6583 11.1199 11.8891 11.8891C11.1199 12.6583 10.1399 13.1821 9.07299 13.3943C8.0061 13.6065 6.90023 13.4976 5.89524 13.0813C4.89024 12.6651 4.03126 11.9601 3.42691 11.0556C2.82257 10.1512 2.5 9.0878 2.5 8C2.50165 6.54182 3.08165 5.14383 4.11274 4.11274C5.14383 3.08165 6.54182 2.50165 8 2.5ZM8.5 7.5L8.5 11C8.5 11.1326 8.44732 11.2598 8.35355 11.3536C8.25978 11.4473 8.13261 11.5 8 11.5C7.86739 11.5 7.74021 11.4473 7.64644 11.3536C7.55268 11.2598 7.5 11.1326 7.5 11L7.5 7.5C7.5 7.36739 7.55268 7.24021 7.64644 7.14645C7.74021 7.05268 7.86739 7 8 7C8.13261 7 8.25978 7.05268 8.35355 7.14645C8.44732 7.24021 8.5 7.36739 8.5 7.5ZM7.25 5.25C7.25 5.10166 7.29398 4.95666 7.3764 4.83332C7.45881 4.70999 7.57594 4.61386 7.71299 4.55709C7.85003 4.50032 8.00083 4.48547 8.14632 4.51441C8.2918 4.54335 8.42544 4.61478 8.53033 4.71967C8.63522 4.82456 8.70665 4.9582 8.73559 5.10368C8.76453 5.24917 8.74967 5.39997 8.69291 5.53701C8.63614 5.67406 8.54001 5.79119 8.41668 5.8736C8.29334 5.95601 8.14833 6 8 6C7.80109 6 7.61032 5.92098 7.46967 5.78033C7.32902 5.63968 7.25 5.44891 7.25 5.25Z"
				fill="#ADADB7"
			/>
		</svg>
	</div>

	<div id="message-input" class="flex flex-row w-full p-2 gap-1">
		<input type="text" class="flex-grow h-full p-2 rounded-md" placeholder="Envie uma mensagem" />
		<button class="mx-1 hover:opacity-50" on:click={sendRandomEmoji}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
			>
				<path
					d="M10.2 1.80005C8.6573 1.80005 7.14925 2.25751 5.86655 3.11459C4.58385 3.97166 3.5841 5.18985 2.99374 6.61512C2.40337 8.04038 2.24891 9.6087 2.54987 11.1218C2.85084 12.6348 3.59371 14.0246 4.68456 15.1155C5.77541 16.2063 7.16524 16.9492 8.67829 17.2502C10.1913 17.5511 11.7597 17.3967 13.1849 16.8063C14.6102 16.2159 15.8284 15.2162 16.6855 13.9335C17.5425 12.6508 18 11.1427 18 9.60005C17.9978 7.53203 17.1753 5.54934 15.713 4.08703C14.2507 2.62472 12.268 1.80223 10.2 1.80005ZM10.2 16.2C8.89464 16.2 7.6186 15.813 6.53323 15.0877C5.44787 14.3625 4.60193 13.3318 4.10239 12.1258C3.60285 10.9198 3.47215 9.59273 3.72681 8.31245C3.98148 7.03218 4.61007 5.85617 5.53309 4.93314C6.45612 4.01012 7.63213 3.38153 8.9124 3.12687C10.1927 2.8722 11.5197 3.00291 12.7257 3.50244C13.9317 4.00198 14.9625 4.84792 15.6877 5.93329C16.4129 7.01865 16.8 8.29469 16.8 9.60005C16.798 11.3499 16.102 13.0275 14.8647 14.2648C13.6274 15.5021 11.9498 16.1981 10.2 16.2ZM6.6 8.10005C6.6 7.92205 6.65278 7.74804 6.75167 7.60004C6.85057 7.45203 6.99113 7.33668 7.15558 7.26856C7.32004 7.20044 7.501 7.18262 7.67558 7.21734C7.85016 7.25207 8.01053 7.33779 8.13639 7.46365C8.26226 7.58952 8.34798 7.74988 8.3827 7.92447C8.41743 8.09905 8.39961 8.28001 8.33149 8.44446C8.26337 8.60892 8.14801 8.74948 8.00001 8.84837C7.85201 8.94727 7.678 9.00005 7.5 9.00005C7.2613 9.00005 7.03238 8.90523 6.8636 8.73645C6.69482 8.56766 6.6 8.33874 6.6 8.10005ZM13.8 8.10005C13.8 8.27805 13.7472 8.45206 13.6483 8.60006C13.5494 8.74807 13.4089 8.86342 13.2444 8.93154C13.08 8.99966 12.899 9.01748 12.7244 8.98276C12.5498 8.94803 12.3895 8.86231 12.2636 8.73645C12.1377 8.61058 12.052 8.45021 12.0173 8.27563C11.9826 8.10105 12.0004 7.92009 12.0685 7.75563C12.1366 7.59118 12.252 7.45062 12.4 7.35173C12.548 7.25283 12.722 7.20005 12.9 7.20005C13.1387 7.20005 13.3676 7.29487 13.5364 7.46365C13.7052 7.63244 13.8 7.86135 13.8 8.10005ZM13.7197 11.7C12.948 13.0343 11.6647 13.8 10.2 13.8C8.73525 13.8 7.45275 13.035 6.681 11.7C6.63759 11.6318 6.60844 11.5554 6.5953 11.4755C6.58217 11.3957 6.58532 11.314 6.60458 11.2354C6.62383 11.1568 6.65878 11.0829 6.70733 11.0182C6.75588 10.9534 6.81702 10.8992 6.88708 10.8587C6.95714 10.8182 7.03467 10.7923 7.115 10.7825C7.19533 10.7728 7.2768 10.7794 7.35452 10.8019C7.43224 10.8245 7.50459 10.8625 7.56723 10.9137C7.62986 10.965 7.68149 11.0283 7.719 11.1C8.27925 12.0683 9.15975 12.6 10.2 12.6C11.2402 12.6 12.1207 12.0675 12.6802 11.1C12.7598 10.9622 12.8909 10.8616 13.0446 10.8204C13.1983 10.7792 13.3622 10.8007 13.5 10.8803C13.6378 10.9599 13.7384 11.0909 13.7796 11.2447C13.8209 11.3984 13.7993 11.5622 13.7197 11.7Z"
					fill="white"
				/>
			</svg>
		</button>
		<button class="mx-1 hover:opacity-50">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
			>
				<path
					d="M18.2 9.60005C18.2 8.05736 17.7426 6.54931 16.8855 5.2666C16.0284 3.9839 14.8102 2.98416 13.385 2.39379C11.9597 1.80343 10.3914 1.64896 8.87834 1.94993C7.36529 2.25089 5.97546 2.99377 4.88461 4.08462C3.79376 5.17547 3.05088 6.5653 2.74992 8.07835C2.44895 9.5914 2.60342 11.1597 3.19378 12.585C3.78414 14.0102 4.78389 15.2284 6.06659 16.0855C7.3493 16.9426 8.85735 17.4001 10.4 17.4001C12.4681 17.3979 14.4508 16.5754 15.9131 15.1131C17.3754 13.6508 18.1979 11.6681 18.2 9.60005ZM3.80004 9.60005C3.80004 8.2947 4.18712 7.01865 4.91234 5.93329C5.63756 4.84792 6.66834 4.00199 7.87433 3.50245C9.08032 3.00291 10.4074 2.87221 11.6876 3.12687C12.9679 3.38153 14.1439 4.01012 15.0669 4.93315C15.99 5.85617 16.6186 7.03218 16.8732 8.31246C17.1279 9.59273 16.9972 10.9198 16.4976 12.1258C15.9981 13.3318 15.1522 14.3625 14.0668 15.0878C12.9814 15.813 11.7054 16.2001 10.4 16.2001C8.65022 16.1981 6.97264 15.5021 5.73533 14.2648C4.49802 13.0275 3.80203 11.3499 3.80004 9.60005ZM10.4 10.5001C10.222 10.5001 10.048 10.4473 9.90003 10.3484C9.75203 10.2495 9.63667 10.1089 9.56855 9.94447C9.50043 9.78001 9.48261 9.59905 9.51734 9.42447C9.55206 9.24989 9.63778 9.08952 9.76365 8.96366C9.88951 8.83779 10.0499 8.75207 10.2245 8.71735C10.399 8.68262 10.58 8.70044 10.7445 8.76856C10.9089 8.83668 11.0495 8.95204 11.1484 9.10004C11.2473 9.24804 11.3 9.42205 11.3 9.60005C11.3 9.83875 11.2052 10.0677 11.0364 10.2364C10.8677 10.4052 10.6387 10.5001 10.4 10.5001ZM10.4 13.8001C10.222 13.8001 10.048 13.7473 9.90003 13.6484C9.75203 13.5495 9.63667 13.4089 9.56855 13.2445C9.50043 13.08 9.48261 12.8991 9.51734 12.7245C9.55206 12.5499 9.63778 12.3895 9.76365 12.2637C9.88951 12.1378 10.0499 12.0521 10.2245 12.0173C10.399 11.9826 10.58 12.0004 10.7445 12.0686C10.9089 12.1367 11.0495 12.252 11.1484 12.4C11.2473 12.548 11.3 12.722 11.3 12.9001C11.3 13.1387 11.2052 13.3677 11.0364 13.5364C10.8677 13.7052 10.6387 13.8001 10.4 13.8001ZM10.4 7.20005C10.222 7.20005 10.048 7.14727 9.90003 7.04837C9.75203 6.94948 9.63667 6.80892 9.56855 6.64447C9.50043 6.48001 9.48261 6.29905 9.51734 6.12447C9.55206 5.94989 9.63778 5.78952 9.76365 5.66366C9.88951 5.53779 10.0499 5.45207 10.2245 5.41735C10.399 5.38262 10.58 5.40044 10.7445 5.46856C10.9089 5.53668 11.0495 5.65203 11.1484 5.80004C11.2473 5.94804 11.3 6.12205 11.3 6.30005C11.3 6.53875 11.2052 6.76767 11.0364 6.93645C10.8677 7.10523 10.6387 7.20005 10.4 7.20005Z"
					fill="white"
				/>
			</svg>
		</button>
	</div>
</div>

<style>
	* {
		font-family: 'Inter', sans-serif;
		font-size: 0.8rem;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		vertical-align: middle;
	}

	#chat-container {
		background: #0e0e0f;
	}

	p {
		color: var(--color-white, #fff);
		line-height: 120%;
	}

	.message-text {
		font-weight: 400;
	}

	#warning {
		border-top: 1px solid #252526;
	}

	#warning > p {
		color: #adadb7;
		font-size: 0.7rem;
	}

	#message-input {
		border-radius: 0.3rem;
		background: #3e3e3f;
	}

	#message-input > input {
		background: transparent;
		color: #fff;
	}

	::placeholder {
		color: #ababb5;
		opacity: 1;
	}
</style>
