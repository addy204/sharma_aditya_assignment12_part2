FROM node:lts-iron
 
WORKDIR /web-component-library/

 
COPY public/ /sharma_aditya_ui_garden/public
COPY src/ /sharma_aditya_ui_garden/src
COPY package.json /sharma_aditya_ui_garden/
COPY . /sharma_aditya_ui_garden
 
RUN npm install
RUN npm run build
 
CMD ["npm", "run", "storybook"]