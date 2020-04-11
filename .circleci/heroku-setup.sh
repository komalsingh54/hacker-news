#!/bin/bash

wget -qO- https://cli-assets.heroku.com/install-ubuntu.sh | sh

cat > ~/.netrc << EOF
machine api.heroku.com
  login $HEROKU_LOGIN
  password $HEROKU_API_KEY
machine git.heroku.com
  login $HEROKU_LOGIN
  password $HEROKU_API_KEY
EOF

echo $CIRCLE_BRANCH
echo $HEROKU_APP

if [[ $CIRCLE_BRANCH -eq "master" ]]
then
  heroku git:remote -a $HEROKU_APP_PROD
else
  heroku git:remote -a $HEROKU_APP
fi

git push heroku master
sleep 5 # sleep for 5 seconds to wait for dynos
heroku restart