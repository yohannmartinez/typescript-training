grepRsult="$(grep -n -R -e 'fit(' -e 'xit(' -e 'fdescribe(' -e 'xdescribe(' './src')"
RED='\033[0;31m'

if [ "${grepRsult}" ]
then
        echo "You can't push to github xit, fit, fdescribe, xdescribe test"
        echo "Found some of them there :${RED} $grepRsult"
        exit 1
else
        exit 0
fi