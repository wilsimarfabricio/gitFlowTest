FROM ubuntu

RUN apt-get update && apt-get install -y nodejs npm && apt-get clean
LABEL description = 'Test gitflow'
LABEL version = '1.0.0'