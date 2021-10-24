# BuzzSense
## project made for hackgt8 by [Joy](https://github.com/joywying), [Lauren](https://github.com/Laireen), [Chi](https://github.com/udejiofor-chidobem), and [Micah](https://github.com/mielwyn)

## description & motivation
Like most new implementations on campus this semester, BuzzSense was designed as a response to the coronavirus. With the resurgence of in-person students on campus, it’s harder than ever to maintain proper social distancing in our shared spaces. Specifically, one of BuzzSense’s largest goals was to aid immunocompromised individuals and those with restrictions on mobility in their access to covid-safe areas. Another possible application would be toward sustainability. If there are less people in an area, lights/HVAC can be altered. Overall, we wanted an easy way to check the occupancy levels of the areas we frequently visit.

...Plus, many of us students know all about the frustrating experience of looking through the 18 combined floors of Clough Commons, Price Gilbert Library, and Crosland Tower to find an open study spot.

BuzzSense determines the occupancy levels of different public buildings on campus and their floors using the number of active devices connected to various access points (which correlate with the location in the building). Our program compares the number of currently active devices with prior data to see if occupancy is above or below average.

Users can visit the BuzzSense website and select a building and floor to see a graphical representation of the floor’s location in the building and find the occupancy of the floor. Right now, our three levels of occupancy are “LOW”, “MEDIUM”, and “HIGH”. “MEDIUM” corresponds to the average occupancy of the building (~average number of active devices) “LOW” and “HIGH” correspond to below average occupancy and above average occupancy respectively
### other solutions attempted / ruled out

- using SNMP to get a router's ARP table instead of actively scanning for packets and trying to isolate unique users (which would require less hardware etc)
- Bluetooth LE

## more features / roadmap / goals
- BuzzSense mobile app
- actually store (hashed?) mac addresses / track users over time
- get data collected over a longer period of time to look for trends
- make graphs & heatmaps so the website is nicer and more informative (UI Improvement)


## Setup
### Main computer setup
1. clone repo
2. cd to project directory
3. install node.js
4. `npm install` to get dependencies
5. set up a config folder with a keys.js file, then put client secrets in there. use module.exports to access them from the main code.
6. replace node.js connect string for one pointed to your own database
7. node ./app.js
8. navigate to your ip address:3000 to access the website (avoid using localhost because browsers don't like out of domain GET requests)

### Raspberry Pi setup
1. install/configure `tcpdump`
2. put `s.sh` and `monitor.py` in the same directory (both found in `rpi-monitor` in this repo)
3. configure the server endpoint to point to your main computer
4. fill out the name field according to `building` + `floor` -- we went with `chiroom` because we tested with Chi's room although this doesn't follow the convention we ultimately implemented
