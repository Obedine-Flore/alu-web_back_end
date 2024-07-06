#!/usr/bin/env python3
""" this lists all documents in a collection """


def list_all(mongo_collection):
    """this lists all documents in a collection"""
    documents = mongo_collection.find()
    return documents
