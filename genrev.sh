#!/bin/bash

docker-compose exec app alembic -c /alembic/alembic.ini revision --autogenerate -m "$1"
