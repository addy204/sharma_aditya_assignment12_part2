FROM node:lts-iron
 
WORKDIR /sharma_aditya_ui_garden/
 
COPY public/ /sharma_aditya_ui_garden/public
COPY src/ /sharma_aditya_ui_garden/src
COPY package.json /sharma_aditya_ui_garden/
COPY . /sharma_aditya_ui_garden
 
RUN npm install
 
CMD ["npm", "run", "storybook"]