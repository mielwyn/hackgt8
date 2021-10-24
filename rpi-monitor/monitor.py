import os
from scapy.all import *
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
			print('unique ip: ',packet[IP].dst)
			counter += 1
		elif ipdict.has_key(packet[IP].dst):
			ipdict[packet[IP].dst] = ipdict[packet[IP].dst] + 1
			ipdict[packet[IP].src] = 1
			print('unique ip: ',packet[IP].src)
			counter += 1
		else:
			ipdict[packet[IP].src] = 1
			ipdict[packet[IP].dst] = 1
			print('unique ip: ',packet[IP].src)
			print('unique ip: ',packet[IP].dst)
			counter += 2
print(str(counter) + '/'+ str(len(packets)*2) + ' unique IPs')