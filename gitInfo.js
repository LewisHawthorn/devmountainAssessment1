/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = 'Git is a version control system. It can be used to take snapshots of files, versions of the files at a particular points in time when the snapshots were taken. These snapshots are stored locally in a structure of branches. When pushing files  to a remote repository, one may specify a branch to push from, in which case files within the selected branch (and any branch below the selected branch in the folder hierarchy) are uploaded. Unlike many other file storage systems, git stores the entirity of the file in each snapshot, rather than just a list of changes that have occured between versions.'
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
gitHubDefinition = 'gitHub is a remote file storage system that can be used for sharing files of over the internet and creating backups among other uses. On gitHub users can create repositories for which they can select file sharing settings that define who can access the files that they have uploaded and then upload files from their local machines to these repositories for themselves or others to access later. Files can be uploaded to gitHub through a GUI or a command line interface. Git contains the push command which is used for uploading files to a repository such as github.'
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/
gitInitDefinition = 'git init is a command used to initialise a git repository. The git repository will be generate as a (.git) child directory of the present working directory if this command is used without arguments or if a directory is specified in the command, it will be a generated as a (.git) child folder of the directory specified . Once a git repository is created, versions of files within the working tree (parent directory of the .git folder) containing staged and committed changes are stored in this .git folder.
//CODE HERE

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
gitCloneDefinition = 'git clone is a commmand used to create a copy of an existing local or remote repository. This allows a user to make changes to files within the clone repository without altering the repository from which the clone was produced. Additionally, git clone can create a shallow clone containing only files with a specified data tag or depth (only including a specified number of committed versions of each file.) for when only a shallow clone is necessary to reduce the size of the clone folder.'
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
gitStatusDefinition = 'Git status is a command used to show the current status of the working directory (unsaved changes in the workign tree) and the staging area (staged changes not yet committed), sorted by the branch to which the files with unsaved and staged changes belong.'
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
gitAddDefinition = 'Git add is a command used to stage a version of a file containing unsaved changes. Once staged, the file version is stored locally in the .git folder similarly to committed file versions '
gitAddCode = 'git add -A'
'this is the code to add all files within the current working directory; to add files below a certain directory instead use git add -A <path of directory>'
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
gitCommitDefinition = 'Git commit commits all currently staged files, moving their status to committed and allowing them to be loaded using git checkout command. Using the -m option allows you to input a message with the commit to explain the status of the committed file (viewable with the git log command). Using the -a option allows you to directly commit unstaged changes without first placing them in the staging area.'

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
gitPushDefinition ='git push allows you to upload committed fiels from a local repository to a remote repository'