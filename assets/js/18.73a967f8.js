(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{291:function(t,i,g){"use strict";g.r(i);var e=g(13),n=Object(e.a)({},(function(){var t=this,i=t._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"_1、git-的基本使用方法-必会"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1、git-的基本使用方法-必会"}},[t._v("#")]),t._v(" 1、git 的基本使用方法(必会)")]),t._v(" "),i("p",[t._v('第一步:window 本机电脑安装 git 软件(只需要一次) 第二步:配置环境变量(只需要一次)\n安装到 D:\\software\\git\\目录，把 bin 目录路径完整加入 Path 变量。 D:\\software\\git\\bin 第三步:配置 git 的 config(只需要一次)\ngit config --global user.email "you@example.com"\ngit config --global user.name "Your Name"\n查看你的配置是 git config --list\n第四步:使用 git 开始工作 (每次)')]),t._v(" "),i("p",[t._v("1 、在本地建立一个文件夹，作为本地代码仓库，并初始化 cmd 中 cd 到该文件夹，执行 git init 命令，让该文件夹成为受 git 管理的仓库目录。")]),t._v(" "),i("p",[t._v("2、把某个文件添加到本地仓库(前提项目文件夹有这个文件) 执行 git add HelloWorld.html 命令")]),t._v(" "),i("p",[t._v('如果暂存所有(git add .)\n3、提交文件到仓库\ngit commit -m "第一次使用 git 提交文件"m 后面的“” 可以写上备 s 注信息的)')]),t._v(" "),i("h2",{attrs:{id:"_2、git-工作流程-必会"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2、git-工作流程-必会"}},[t._v("#")]),t._v(" 2、git 工作流程(必会)")]),t._v(" "),i("p",[t._v("git 的作用\n1、在工作目录中修改某些文件 2、对修改后的文件进行快照，然后保存到暂存区域 3、提交更新，将保存在暂存区域的文件快照永久转储到 git 目录中 git 的工作中使用场景:\n两个分支 master 和 dev")]),t._v(" "),i("p",[t._v("项目开始执行流程\ngit branch -a (查看所有分支)\n0、克隆代码 git clone 地址\n1、拉取线上 master 最新代码:\n2、切换到开发分支: git checkout dev\n3、合并 master 本地分支(master): git merge master\n4、开始开发\n5、开发结束\n6、查看当前文件更改状态: git status\n7、把所有更改代码放到缓存区: git add -A\n8、查看当前文件更改状态 : git status\n9、缓存区内容添加到仓库中: git commit -m '本次更改注释'\n10、把代码传到 gitLab 上: git push origin dev 11、若代码到达上线标准则合并代码到 master,切换分支到 master:\n12、拉取 master 最新分支: git pull origin master\n13、合并分支代码到 master(若有冲突则解决冲突): git merge dev 14、把当前代码上传到 gitLab: git push origin master\n15、代码上线后，用 tag 标签标记发布结点(命名规则:prod_+版本_+上线日期) git tag -a prod_V2.1.8_20200701")]),t._v(" "),i("p",[t._v("git pull origin master")]),t._v(" "),i("p",[t._v("git checkout master")]),t._v(" "),i("p",[t._v("16、tag 标签推到 gitLab\ngit push origin prod_V2.1.8_20200701 缓存区的应用 1、需要合并别人代码进来")]),t._v(" "),i("p",[t._v("1.1)把自己的代码放入暂存: git stash 1.2)如果需要释放出来用: git stash pop#恢复最近一次的暂存 1.3)查看你有哪些队列: git stash list 1.4)删除第一个队列，以此可以类推:")]),t._v(" "),i("p",[t._v("2、需要切换分支 2.1)git add -A")]),t._v(" "),i("p",[t._v("2.2)git stash save 'demo' 2.3)git stash list\n2.4)git stash apply stash@{0}")]),t._v(" "),i("p",[t._v("补充指令\ngit reflog 查看提交记录命令:\ngit show # 显示某次提交的内容 git show $id\ngit rm "),i("file",[t._v(" # 从版本库中删除文件\ngit reset "),i("file",[t._v(" # 从暂存区恢复到工作文件\ngit reset HEAD^ # 恢复最近一次提交过的状态，即放弃上次提交后的所有本次修改 git diff "),i("file",[t._v(" # 比较当前文件和暂存区文件差异 git diff\ngit log -p "),i("file",[t._v(" # 查看每次详细修改内容的 diff\ngit branch -r # 查看远程分支\ngit merge "),i("branch",[t._v(" # 将 branch 分支合并到当前分支\ngit stash pop git pull # 抓取远程仓库所有分支更新并合并到本地\ngit push origin master # 将本地主分支推到远程主分支")])],1)],1)],1)],1)],1),t._v(" "),i("p",[t._v("git branch 分支名#创建分支\ngit checkout 分支名#切换分支\ngit checkout -b 分支名#创建并切换分支\ngit branch --merge / git branch --no-merge#查看已经合并的分支/未合并的分支")]),t._v(" "),i("p",[t._v("git branch -d 分支名 / git branch -D 分支名#删除的已合并的分支/未合并的分支")]),t._v(" "),i("h2",{attrs:{id:"_3、我们如何使用-git-和开源的码云或-github-上面的远端仓库的项目进-行工作呢-必会"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3、我们如何使用-git-和开源的码云或-github-上面的远端仓库的项目进-行工作呢-必会"}},[t._v("#")]),t._v(" 3、我们如何使用 git 和开源的码云或 github 上面的远端仓库的项目进 行工作呢(必会)")]),t._v(" "),i("p",[t._v("客户端本地 git 如何和远程仓库码云，github 连接上次文件\ngit 仓库如 github 都是通过使用 SSH 与客户端连接的!\n我们通过本地 git 生成生成密钥对后，将公钥保存至 github，每次连接时 SSH 客户端发送本 地私钥(默认~/.ssh/id_rsa)到服务端验证。单用户情况下，连接的服务器上保存的公钥和 发送的私钥自然是配对的\n命令如下:ssh-keygen -t rsa -C 'XXX@qq.com' -f id_rsa_second\n或 ssh-keygen -t rsa -C \"XXX@qq.com\"\n邮箱可以换成你的")]),t._v(" "),i("p",[t._v("git stash drop stash@{0}")]),t._v(" "),i("p",[t._v("![page122image142783072](file:////Users/suxingxing/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image001.jpg)")]),t._v(" "),i("p",[t._v("添加公钥(id_rsa_second.pub)到你的远程仓库(github)\n登陆你的 github 帐户。点击你的头像，然后 Settings -> 左栏点击 SSH and GPG keys -> 点 击 New SSH key\n然后你复制上面的公钥内容，粘贴进“Key”文本域内。 title 域，自己随便起个名字。 点击 Add key。\n完成以后，验证下这个 key 是不是正常工作:\n$ ssh -T git@github.com\nAttempts to ssh to github\n如果，看到:\nHi xxx! You've successfully authenticated, but github does not # provide shell access. 表示设置已经成功\n码云:\n进入码云的设置页面")]),t._v(" "),i("p",[t._v("![page123image142765856](file:////Users/suxingxing/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image002.jpg)")]),t._v(" "),i("p",[t._v("在终端(Terminal)中输入 ssh -T git@gitee.com 若返回 Welcome to gitee.com, yourname!")]),t._v(" "),i("p",[t._v('代表成功!\n通常步骤:\n本地新建仓库，输入 git init 初始化，让 git 接管\n关联一个远程仓库:git remote add origin git@github.com:XXXXXXXXX.git 把文件添加到本地版本库\ngit add 文件名\n把文件修改提交到本地仓库\ngit commit -m"注释"\ngit pull origin master 先将 github 上的代码 pull 下来\n然后在 git push origin master 将最新的修改推送到远程仓库\ngit - 查看远程仓库信息\n可以通过命令 git remote show [remote-name] 查看某个远程仓库的详细信息')]),t._v(" "),i("p",[t._v("![page123image142766272](file:////Users/suxingxing/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image003.jpg)")]),t._v(" "),i("h2",{attrs:{id:"_4、git-github-gitlab-三者之间的联系以及区别-必会"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_4、git-github-gitlab-三者之间的联系以及区别-必会"}},[t._v("#")]),t._v(" 4、git，github， gitlab 三者之间的联系以及区别(必会)")]),t._v(" "),i("p",[t._v("1、git\ngit 是一个版本控制系统。 版本控制是一种用于记录一个或多个文件内容变化，方便我们查阅特定版本修订情况的系")]),t._v(" "),i("p",[t._v("统。\n早期出现的版本控制系统有:svn、cvs 等，它们是集中式版本控制系统，都有一个单一的集")]),t._v(" "),i("p",[t._v("中管理的服务器，保存所有文件的修订版本，而协同合作的开发人员都通过客户端连接到这台服 务器，取出最新的文件或者提交更新。")]),t._v(" "),i("p",[t._v("而我们的主角 git 是分布式版本控制系统。git 已经成为越来越多开发者的青睐，因为分布 式的优势是很显著的。")]),t._v(" "),i("p",[t._v("2、集中式和分布式版本控制系统的区别: 2.1)分布式版本控制系统下的本地仓库包含代码库还有历史库，在本地就可以查看版本历 史 2.2)而集中式版本控制系统下的历史仓库是存在于中央仓库，每次对比与提交代码都必须")]),t._v(" "),i("p",[t._v("连接到中央仓库\n2.3)多人开发时，如果充当中央仓库的 git 仓库挂掉了，任何一个开发者都可以随时创建一")]),t._v(" "),i("p",[t._v("个新的中央仓库然后同步就可以恢复中央仓库 2、 github 和 gitlab")]),t._v(" "),i("p",[t._v("github 和 gitlab 都是基于 web 的 git 仓库，使用起来二者差不多，它们都提供了分享开 源项目的平台，为开发团队提供了存储、分享、发布和合作开发项目的中心化云存储的场 所。\ngithub 作为开源代码库，拥有超过 900 万的开发者用户，目前仍然是最火的开源项目托管 平台，github 同时提供公共仓库和私有仓库，但如果使用私有仓库，是需要付费的。 gitlab 解决了这个问题，你可以在上面创建私人的免费仓库。")]),t._v(" "),i("p",[t._v("gitlab 让开发团队对他们的代码仓库拥有更多的控制，相比较 github ,")]),t._v(" "),i("p",[t._v("gitlab 特色\n3.1)允许免费设置仓库权限;\n3.2) 允许用户选择分享一个 project 的部分代码;\n3.3) 允许用户设置 project 的获取权限，进一步提升安全性; 3.4) 可以设置获取到团队整体的改进进度;\n3.5) 通过 innersourcing 让不在权限范围内的人访问不到该资源;")]),t._v(" "),i("p",[t._v("所以，从代码的私有性上来看，gitlab 是一个更好的选择。但是对于开源项目而言，github 依然是代码托管的首选。")]),t._v(" "),i("h2",{attrs:{id:"_5、github-和码云的区别-必会"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_5、github-和码云的区别-必会"}},[t._v("#")]),t._v(" 5、github 和码云的区别(必会)")]),t._v(" "),i("p",[t._v("github 全英文、用户基数多，知名库多、国内访问的话，偶尔会有不稳定，出现上不去的情况、 私有项目需要付费\n码云\n全中文、用户量没有 github 多，知名库相对较少、服务器再国内，相对稳定、每个用户有 1000 个免费的私有项目、访问速度很快，支持 svn，git 两种方式、每个仓库有 1G 的容量限")]),t._v(" "),i("p",[t._v("制")]),t._v(" "),i("h2",{attrs:{id:"_6、提交时发生冲突-你能解释冲突是如何产生的吗-你是如何解决-的-必会"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_6、提交时发生冲突-你能解释冲突是如何产生的吗-你是如何解决-的-必会"}},[t._v("#")]),t._v(" 6、提交时发生冲突，你能解释冲突是如何产生的吗?你是如何解决 的(必会)")]),t._v(" "),i("p",[t._v("冲突是如何产生 开发过程中，我们都有自己的特性分支，所以冲突发生的并不多，但也碰到过。诸如公共 类的公共方法，我和别人同时修改同一个文件，他提交后我再提交就会报冲突的错误。 如何解决冲突\n1、发生冲突，在 IDE 里面一般都是对比本地文件和远程分支的文件，然后把远程分支上文 件的内容手工修改到本地文件，然后再提交冲突的文件使其保证与远程分支的文件一致， 这样才会消除冲突，然后再提交自己修改的部分。特别要注意下，修改本地冲突文件使其 与远程仓库的文件保持一致后，需要提交后才能消除冲突，否则无法继续提交。必要时可 与同事交流，消除冲突。\n2、发生冲突，也可以使用命令\n通过 git stash 命令，把工作区的修改提交到栈区，目的是保存工作区的修改;\n通过 git pull 命令，拉取远程分支上的代码并合并到本地分支，目的是消除冲突;\n通过 git stash pop 命令，把保存在栈区的修改部分合并到最新的工作空间中; 分支提交冲突:当分支对某文件某句话进行修改后，切换到主分支也对该文件该句话进行 修改，使用 git merge 进行合并，需要将两个修改进行合并。此时合并产生冲突")]),t._v(" "),i("p",[t._v("3、另外一种解决方法\n3.1)git status 查看冲突文件")]),t._v(" "),i("p",[t._v("3.2)编辑器打开冲突文件，查看内容。Git 用<<<<<<<，=======，>>>>>>> 标 记出不同分支的内容")]),t._v(" "),i("p",[t._v('3.3)修改文件内容\n3.4)提交 git add file ; git commit -m ""')]),t._v(" "),i("p",[t._v("查看分支合并图 git log –graph")]),t._v(" "),i("h2",{attrs:{id:"_7、如果本次提交误操作-如何撤销-必会"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_7、如果本次提交误操作-如何撤销-必会"}},[t._v("#")]),t._v(" 7、如果本次提交误操作，如何撤销(必会)")]),t._v(" "),i("p",[t._v("如果想撤销提交到索引区的文件，可以通过 git reset HEAD file 如果想撤销提交到本地仓库的文件\n可以通过 git reset –soft HEAD^n 恢复当前分支的版本库至上一次提交的状态，索引区和工")]),t._v(" "),i("p",[t._v("作空间不变更;可以通过 git reset –mixed HEAD^n 恢复当前分支的版本库和索引区至上一 次 提交的状态，工作区不变更;可以通过 git reset –hard HEAD^n 恢复当前分支的版本库、 索 引区和工作空间至上一次提交的状态。")]),t._v(" "),i("h2",{attrs:{id:"_8、git-修改提交的历史信息-必会"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_8、git-修改提交的历史信息-必会"}},[t._v("#")]),t._v(" 8、git 修改提交的历史信息(必会)")]),t._v(" "),i("p",[t._v("git 修改提交的历史信息详细操作 git rebase -i HEAD~3\n输出如下")]),t._v(" "),i("p",[t._v("pick 1 commit 1\npick 2 commit 2\npick 3 commit 3\n要修改哪个，就把那行的 pick 改为 edit，然后退出。例如想修改 commit 1 的 author，光标移")]),t._v(" "),i("p",[t._v("到第一个 pick，按 i 键进入 INSERT 模式，把 pick 改为 edit: edit 1 commit 1")]),t._v(" "),i("p",[t._v("pick 2 commit 2")]),t._v(" "),i("p",[t._v("pick 3 commit 3 ...")]),t._v(" "),i("p",[t._v("– INSERT –\n然后按 esc 键，退出 INSERT 模式，输入:wq 退出，这时可以看到提示，可以修改 commit 1 的信息了\n输入 amd 命令重置用户信息: $ git commit --amend --reset-author\n会出现 commit 1 的提交记录及注释内容，可进入 INSERT 模式修改注释，:wq 退出 这时再查看提交历史，发现 commit 1 的 author 已经变成 b(b@email.com)了， 且是最新一")]),t._v(" "),i("p",[t._v("次的记录\n通过 continue 命令回到正常状态: $ git rebase --continue")]),t._v(" "),i("h2",{attrs:{id:"_9、如何删除-github-和-gitlab-上的文件夹-必会"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_9、如何删除-github-和-gitlab-上的文件夹-必会"}},[t._v("#")]),t._v(" 9、如何删除 github 和 gitlab 上的文件夹(必会)")]),t._v(" "),i("p",[t._v("解决办法\n重点在于 git push -u\n方法一:\n这里以删除 .setting 文件夹为案例\ngit rm -r --cached .setting #--cached 不会把本地的.setting 删除 git commit -m 'delete .setting dir'\ngit push -u origin master\n方法二:\n如果误提交的文件夹比较多，方法一也较繁琐 直接修改.gitignore 文件,将不需要的文件过滤掉，然后执行命令 git rm -r --cached .\ngit add .\ngit commit\ngit push -u origin master")]),t._v(" "),i("h2",{attrs:{id:"_10、如何查看分支提交的历史记录-查看某个文件的历史记录呢-必-会"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_10、如何查看分支提交的历史记录-查看某个文件的历史记录呢-必-会"}},[t._v("#")]),t._v(" 10、如何查看分支提交的历史记录?查看某个文件的历史记录呢(必 会)")]),t._v(" "),i("p",[t._v("查看分支的提交历史记录\n命令 git log –number:表示查看当前分支前 number 个详细的提交历史记录\n命令 git log –number –pretty=oneline:在上个命令的基础上进行简化，只显示 sha-1 码和 提交信息;\n命令 git reflog –number: 表示查看所有分支前 number 个简化的提交历史记录\n命令 git reflog –number –pretty=oneline:显示简化的信息历史信息 如果要查看某文件的提交历史记录，直接在上面命令后面加上文件名即可\n注意:如果没有 number 则显示全部提交次数")]),t._v(" "),i("h2",{attrs:{id:"_11、git-跟-svn-有什么区别-必会"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_11、git-跟-svn-有什么区别-必会"}},[t._v("#")]),t._v(" 11、git 跟 svn 有什么区别(必会)")]),t._v(" "),i("p",[t._v("git 是分布式版本控制系统，其他类似于 svn 是集中式版本控制系统。")]),t._v(" "),i("p",[t._v("分布式区别于集中式在于:每个节点的地位都是平等，拥有自己的版本库，在没有网络的")]),t._v(" "),i("p",[t._v("情况下，对工作空间内代码的修改可以提交到本地仓库，此时的本地仓库相当于集中式的 远程仓库，可以基于本地仓库进行提交、撤销等常规操作，从而方便日常开发")]),t._v(" "),i("p",[t._v("git 和 svn 的区别\ngit 是分布式版本控制，svn 是集中式版本控制(核心区别)\ngit 相对于 svn 的优势就是不需要网络即可版本控制\ngit 把内容按数据方式存储，而 svn 是按文件\ngit 可以是公用的，可以分享，svn 基本是公司内部才能访问，网外不方便访问\ngit 不依赖中央服务器，即使服务器有问题也不受影响，svn 依赖服务器，一旦服务器有问题 就会受影响\ngit 没有一个全局的版本号，svn 有")]),t._v(" "),i("h2",{attrs:{id:"_12、我们在本地工程常会修改一些配置文件-这些文件不需要被提交-而我们又不想每次执行-git-status-时都让这些文件显示出来-我们该如-何操作-必会"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_12、我们在本地工程常会修改一些配置文件-这些文件不需要被提交-而我们又不想每次执行-git-status-时都让这些文件显示出来-我们该如-何操作-必会"}},[t._v("#")]),t._v(" 12、我们在本地工程常会修改一些配置文件，这些文件不需要被提交， 而我们又不想每次执行 git status 时都让这些文件显示出来，我们该如 何操作(必会)")]),t._v(" "),i("p",[t._v("首先利用命令 touch .gitignore 新建文件\n$ touch .gitignore 然后往文件中添加需要忽略哪些文件夹下的什么类型的文件 $ vim .gitignore")]),t._v(" "),i("p",[t._v("$ cat .gitignore /target/class .settings\n.imp")]),t._v(" "),i("p",[t._v("*.ini")]),t._v(" "),i("p",[t._v("注意:忽略/target/class 文件夹下所有后缀名为.settings，.imp 的文件，忽略所有后缀名为.ini 的文件。")]),t._v(" "),i("h2",{attrs:{id:"_13、git-fetch-和-git-merge-和-git-pull-的区别-必会"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_13、git-fetch-和-git-merge-和-git-pull-的区别-必会"}},[t._v("#")]),t._v(" 13、git fetch 和 git merge 和 git pull 的区别(必会)")]),t._v(" "),i("p",[t._v("区别如下\ngit pull 相当于 git fetch 和 git merge，即更新远程仓库的代码到本地仓库，然后将内容合 并到当前分支。\ngit merge: 将内容合并到当前分支\ngit pull 相当于是从远程获取最新版本并 merge 到本地 命令从中央存储库中提取特定分支的新更改或提交，并更新本地存储库中的目标分支。\ngit fetch 相当于是从远程获取最新版本到本地，不会自动 merge\n方便记忆:\ngit pull = git fetch + git merge")]),t._v(" "),i("h2",{attrs:{id:"_14、如何把本地仓库的内容推向一个空的远程仓库-高薪常问"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_14、如何把本地仓库的内容推向一个空的远程仓库-高薪常问"}},[t._v("#")]),t._v(" 14、如何把本地仓库的内容推向一个空的远程仓库(高薪常问)")]),t._v(" "),i("p",[t._v("首先确保本地仓库与远程之间是连同的。如果提交失败，则需要进行下面的命令进行连通: git remote add origin XXXX\n注意:XXXX 是你的远程仓库地址。")]),t._v(" "),i("p",[t._v("如果是第一次推送，则进行下面命令: git push -u origin master\n注意:-u 是指定 origin 为默认主分支 之后的提交，只需要下面的命令:")]),t._v(" "),i("p",[t._v("git push")])])}),[],!1,null,null,null);i.default=n.exports}}]);