# Appointment-Management-App
A school software project

## Developer's quick git troubleshooting guide

1. Matching your local repo's HEAD with remote repo's head (simply points your local HEAD to github's HEAD so commits are matching)
```
git fetch origin
git reset --hard origin/master
```

2. Pull remote repository in 2 steps
```
git fetch origin master
```
```
git merge origin/master
```

If these tips do not solve your issues, please communicate in the group.

## Pushing local changes to github repo

1. Create a new branch

        git -b checkout "my new fancy branch"

2. Make sure you are on the new branch 

3. Make your changes

4. Stage your changes (. adds everything, if you have specific changes, change the . to filename)

		git add .

5. Check your status (checks the changes made to staged files)

		git status

6. Commit your changes

		git commit -m "Commit message here, make meaningful commits!"

7. Push your changes

		git push

In the event there are issues pushing your changes, it might be that you need to set your upstream. Git will tell you the right command to use if this is the case. Just copy-paste that command and proceed.
