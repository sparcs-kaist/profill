# ProFill


### Dev server

```bash
cd server
poetry install
poetry run uvicorn app.main:app --reload
```


### Prod server


```bash
# run
poetry run gunicorn --worker-class uvicorn.workers.UvicornWorker --bind '0.0.0.0:8000' --daemon app.main:app

# stop
pkill -f gunicorn
```
