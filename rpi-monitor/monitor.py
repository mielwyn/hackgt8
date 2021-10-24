import os
import requests
from scapy.all import *
import json

server_ip = 'http://128.61.26.2:3000/submitdata'
location_name = 'chiroom' #proof of concept / run in Chi's room

while True:
	os.system('sh s.sh')

	# rdpcap comes from scapy and loads in our pcap file
	packets = rdpcap('testfile.pcap')
	ipdict = {}
	counter = 0
	for packet in packets:
		if IP in packet:
			if ipdict.has_key(packet[IP].src) and ipdict.has_key(packet[IP].dst):
				ipdict[packet[IP].src] = ipdict[packet[IP].src] + 1
				ipdict[packet[IP].dst] = ipdict[packet[IP].dst] + 1
			elif ipdict.has_key(packet[IP].src):
				ipdict[packet[IP].src] = ipdict[packet[IP].src] + 1
				ipdict[packet[IP].dst] = 1
				counter += 1
			elif ipdict.has_key(packet[IP].dst):
				ipdict[packet[IP].dst] = ipdict[packet[IP].dst] + 1
				ipdict[packet[IP].src] = 1
				counter += 1
			else:
				ipdict[packet[IP].src] = 1
				ipdict[packet[IP].dst] = 1
				counter += 2
	toSend = {'name':location_name,'num_unique':counter}
	r = requests.post(server_ip,data=toSend)
	time.sleep(300)