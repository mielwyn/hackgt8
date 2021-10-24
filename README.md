# BuzzSense
## project made for hackgt8 by [Joy](https://github.com/joywying), [Lauren](https://github.com/Laireen), [Chi](https://github.com/udejiofor-chidobem), and [Micah](https://github.com/mielwyn)

## description & motivation

### other solutions attempted / ruled out

1. using SNMP to get a router's ARP table instead of actively scanning for packets and trying to isolate unique users (which would require less hardware etc)
2. Bluetooth LE

## setup
### Main computer setup
1. clone repo
2. cd to project directory
3. install node.js
4. `npm install` to get dependencies
5. node ./app.js
6. navigate to your ip address:3000 to access the website (avoid using localhost because browsers don't like out of domain GET requests)

### Raspberry Pi setup
1. install/configure `tcpdump`
2. put `s.sh` and `monitor.py` in the same directory (both found in `rpi-monitor` in this repo)
3. configure the server endpoint to point to your main computer
4. fill out the name field according to `building` + `floor` -- we went with `chiroom` because we tested with Chi's room although this doesn't follow the convention we ultimately implemented
