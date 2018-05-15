import datetime
import json


from django.core.management.base import BaseCommand, CommandError
from django.utils.timezone import make_aware
from nobel.winners.models import WindAverage

# Here we are creating a custom management command to load our winner data into
# Django models.
# The Command class is loaded by Django at runtime and executed when the file
# that contains it is specified as the command to manage.py
# In our case this file is called `load_winners.py` so the command we will use
# to execute this file is `manage.py load_winners path/to/winners.json`
class Command(BaseCommand):
    #help = 'Load winner data into the database'

    # add_arguments lets us specify arguments and options to read from the command
    # line when the command is executed.
    # We are going to add 1 argument- "json_file" which is a string (type=str)
    # representing the path to a json file containing our data to load.
    def add_arguments(self, parser):
        parser.add_argument('json_file', type=str)

    # The handle method is the main function of the command. This is the entry
    # point for our command and contains all our business logic.
    def handle(self, *args, **options):
        # Grab the path from our commandline arguments
        json_path = options['json_file']
        
        # We are going to write output to the screen as we process things so
        # the user has feedback the script is running.
        self.stdout.write(self.style.SUCCESS('Loading JSON from "{}"'.format(json_path)))
        data = json.load(open(json_path))

        print(data["wind_avg_data"])

        total = len(data["wind_avg_data"])


        for i, row in enumerate(data["wind_avg_data"]):

            time = row[0]
            speed = row[1]


            time = (int(time))/1000

            pTime = make_aware(datetime.datetime.fromtimestamp(time))
            print("time ",time)
            print("speed ",speed)

            windaverage, _ = WindAverage.objects.get_or_create(
                time=pTime,
                speed=speed,
            )

            self.stdout.write(self.style.SUCCESS('Processed {}/{}'.format(i + 1, total)), ending='\r')
            # We call flush to force the output to be written
            self.stdout.flush()

















       