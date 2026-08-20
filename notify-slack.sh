#!/usr/bin/env bash

STATUS="$1"
MESSAGE="$2"

curl -X POST \
  -H "Content-Type: application/json" \
  --data "{\"text\":\"$MESSAGE\"}" \
  "$SLACK_WEBHOOK_URL"