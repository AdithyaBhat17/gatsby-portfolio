---
path: "/blog/docker-auto-restart"
date: 2018-06-12
title: "Docker auto restart for Docker IO"
---

Docker usually goes down/stop whenever the server restarts and is manually started every time.  

The solution which I found was to make the script which brings up the docker by making as a service.  

A service basically starts as soon the server/system restarts. So whenever the docker goes down due to server restart, we could just bring it back by using it as a service.  

The main question is how to do this?  

For Red Hat/ Cent OS -
1. Navigate to the path */etc/init.d*.
2. Place the script/write the script by using - *vi /etc/init.d/example*
3. Make sure the script is marked as executable — *chmod +x /etc/init.d/example*
4. Enable the config in runlevels 2,3,4 and 5 — *chkconfig example on*
5. Start the service with — *service example start*.
You can find the script which is placed for docker restart in */etc/init.d*.  

The script goes like this —  

```sh
#!/bin/bash  
# chkconfig: 345 99 10  
while true  
do  
docker_ps=$(docker ps -q)  
echo $docker_ps  
if [“$docker_ps” == “”]  
then  
docker start `docker ps -qa | sed -n 1p`  
echo “Started container”  
else  
echo “container running”  
sleep 10  
fi  
done
```  

### Thank you!

