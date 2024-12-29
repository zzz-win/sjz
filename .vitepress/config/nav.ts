// 右上角导航
const nav = [
	{
		text: "🏠️网站主页",
		link: "/",
	},
	{
		text: "🎮︎游戏内容",
		items: [
		    {
		        text: "游戏模式",
		        items: [
		            {
		                text: "全面战场",
		                link: "/mode/quanmian.html",
		            },
		            {
		                text: "烽火地带",
		                link: "/mode/fenghuo.html"
		            }
		        ]
		    }
		]
	},
	{
		text: "⬇️游戏下载",
		items: [
		    { text: "PC启动器", link: "https://repo.df.qq.com/repo/launcher/deltaforceminiloader0.0.7.38.10430644.exe" },
		    { text: "IOS启动器", link: "https://apps.apple.com/cn/app/%E4%B8%89%E8%A7%92%E6%B4%B2%E8%A1%8C%E5%8A%A8/id1642894547" },
		    { text: "WeGame启动器", link: "https://repo.df.qq.com/repo/launcher/WeGameMiniLoader.2001918.5.9.10.1440.exe" },
		    { text: "Android启动器", link: "https://df.qq.com/zlkdatasys/mct/d/play.shtml?device=android" },
		],
	},
	{
	    text: "🔍︎关于网站",
	    link: "/about.html",
	},
];

export default nav;
