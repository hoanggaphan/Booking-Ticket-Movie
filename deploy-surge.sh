# Build react app with prodution mode
npm run build

# Move to build folder
cd build

# Clone index.html into 200.html
cp index.html 200.html

# Start deploying via surge
# The command means deploy current folder to domain phimhub.surge.sh
surge . phimhub.surge.sh
