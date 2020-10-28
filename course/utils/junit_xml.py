import logging

from bs4 import BeautifulSoup


def parse_junit_xml(xml):
    results = []

    try:
        doc = BeautifulSoup(xml)
        test_cases = doc.findAll('testcase')

        for test_case in test_cases:
            doc = {
                'name': test_case['name'],
                'status': "PASS",
                'message': ""
            }

            failure = test_case.failure
            if failure:
                doc['status'] = "FAIL"
                doc['message'] = failure['message']

            results.append(doc)
    except Exception as e:
        logger = logging.getLogger(__name__)
        logger.error(e)

    return results
