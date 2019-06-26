---
layout: default
title: Programming
nav_order: 2
---

# Programming 
{: .no_toc }

#### code reviewers are welcome :) 
{: .no_toc }

<br/>

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Javascript of Tomorrow: invoice 
On 21st of June, online invoice generating Software provider, Invoice Simple hosted an open-house to introduce their product and future of JavaScript. Invoice generation is seemingly fairly simple and useful. So I decided to make my own invoice generator using Node.js. As a reference, I read [this article](https://pspdfkit.com/blog/2019/generate-invoices-pdfkit-node/) :)  


## Research Computing Summer School 
### Bash scripting and tools
Basically, the coolest language to manipulate a computer. Even when I type a simple "ls -al", I feel like I become a seasoned programmer and crack any encryption. Summer school lecturer chose a bash scripting as the first lecture. For three hours, he covered the following commands.


1. **tar**: I didn't know that "tar" stands for "tape archive"! Long time ago, system administrators had to deal with tape drives! "tar" is used to **compress files**. Although the command's name is "tar", you could also make a zip file :) Interesting thing about tar is you don't need to use "-" in front of a option. 

    - c: creates archive 
    - v: verbose; tells tar to print all the filename as they are added to the archive
    - f: name of the archive appears next
    
    ```bash
    #Create a tar file (test.tar) combining a, b, c files 
    tar cvf test.tar a b c     
    ```

2. **scp**: shorten word of secure copy. "scp" enable **files to be copied between different computers/hosts**. In other words, using scp, you don't need to send an email with attached files. "scp" will do that for you. "scp" not only copy an individual file but also a _directory_ (with an option "-r"). However, in order to use scp, you must have a access permission (i.e. passwords) from both computers/hosts 

    ```bash
    #copy a directory of local host to a remote host
    scp -r file/folder/to/copy(local directory to be copied) remoteUserId@IP:/remote/destination(destination)
     
    sudo scp -r test root@142.93.149.147:/usr/local
    ```

3. **chmod**: I hate to see a permission error :( When the permission error pops up, a first thing we have to do is check if the current user has an execute access. BUT HOW? "ls -al" provides an access information of files and folders. How to interpret the result? 

    ```bash
    -rwxr-xr-x   1 amy  staff    48 24 Jun 11:58 process.sh         
    ```

    1. First chunk tells an access information for owner, group members, others. 
    2. Ignore the fist "-" and break it into three > rwx,r-x,r-x 
        
        | rwx | r-x | r-- | 
        |:-----------|:-------------|:----------|
        | owner(amy) | group(staff) | others    | 
        | [o] read  | [o] read    | [o] read |
        | [o] write  | [x] write  | [x] write |
        | [o] execute  | [o] execute | [x] execute |
        
        - r: write permission 
        - w: read permission
        - x: execute permission

    3. Hmm, now we could decipher the series of alphabets. Next mission is to change the permission! There are several ways to do that, my personal preference is to use the number :)      
    
    | Number | Octoal Permission | Ref | 
    |:-----------|:-------------|:----------|
    | 0 | No Permission | --- | 
    | 1 | Execute | --x |
    | 2 | Write   | -w- |
    | 3 | Execute(1) + Write(2) | -wx |
    | 4 | Read  | r-- | 
    | 5 | Read(4) + Execute(1) | r-x |
    | 6 | Read(4) + Write(2) | rw- |
    | 7 | Read(4) + Write(2) + Execute(1) | rwx |
    
    ```bash
    -rwxr-xr-x   1 amy  staff    48 24 Jun 11:58 process.sh   
    -> current permission number is 755 
    
    #What if you also want to grant a write permission to a group? 
    chmod 775 process.sh 
    -rwxrwxr-x   1 amy  staff    48 24 Jun 11:58 process.sh      
    ```

4. **wc**: it's frequently used to count a number of lines, words and character. However, a beauty of "wc" comes out when it uses together with a wildcard(*) and sort. 

    ```bash
    #count lines of all pdb files in a current directory. 
    wc -l *.pdb
    
    Result: 
    20 cubane.pdb
    12 ethane.pdb
    9 methane.pdb
    30 octane.pdb
    21 pentane.pdb
    15 propane.pdb
    107 total
    
    
    #line count + sort (ascending)
    wc -l *.pdb | sort 
    
    Result:
    9 methane.pdb
    12 ethane.pdb
    15 propane.pdb
    20 cubane.pdb
    21 pentane.pdb
    30 octane.pdb
    107 total
    
    
    #word count + sort + print the 1st line!
    #tail also works :) 
    wc -l *.pdb | sort | head -1
    
    Result:
    9 methane.pdb
    
    #word count + reverse sort (descending) 
    wc -l *.pdb | sort -r
    
    Result:
    107 total
    30 octane.pdb
    21 pentane.pdb
    20 cubane.pdb
    15 propane.pdb
    12 ethane.pdb
    9 methane.pdb
    
    ```

5. **>** : redirect, sound abstract. Think it as "Save as".
    ```bash
    data
    
    Result:
    Mon 24 Jun 2019 20:35:19 PDT
    
    data(command to print a time) > timestamp.txt 
    
    cat timestamp.txt 
    
    Result: 
    Mon 24 Jun 2019 20:35:19 PDT
    
    #what if you want to append time continuously 
    instead of overwriting a file with a new time? 
    USE "<<" 
    
        data >> timestamp.txt 
    
    ```

6. For Loop
    ```bash
    
    #print all pad files
    for file in *.pad 
    do
    echo $file
    done
    
    
    #add prefix to all pdb files (rename) 
    for i in *.pdb 
    do

    #rename a filename  
    mv $i original-$i
         
    done
    
    ```

7. Shell file:
   FAQ: why a permission error occurs, when I run my shell file? 
    
   
     
    ```bash
    
    ./test.sh
    -bash: ./test.sh: Permission denied
    
    (solved) give a execution permission to user
    chmod 700 test.sh
    
    ```

Self Quiz
```
archiving
```
