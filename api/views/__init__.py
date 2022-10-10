from .action import ActionsViewSet
from .auth import ObtainAuthTokenView
from .canvas_course_registration import CanvasCourseRegistrationViewSet
from .contact_us import ContactUsViewSet
from .course import CourseViewSet
from .difficulty import DifficultyViewSet
from .event import EventViewSet
from .faq import FAQViewSet
from .java_question import JavaQuestionViewSet
from .multiple_choice_question import (
    MultipleChoiceQuestionViewSet,
    SampleMultipleChoiceQuestionViewSet,
)
from .parsons_question import ParsonsQuestionViewSet
from .question import QuestionViewSet
from .question_category import QuestionCategoryViewSet
from .register import UserRegistrationViewSet
from .reset_password import ResetPasswordViewSet
from .change_password import ChangePasswordViewSet
from .submission import SubmissionViewSet
from .token_use import TokenUseViewSet
from .token_value import TokenValueViewSet
from .update_profile import UpdateProfileViewSet
from .uqj import UQJViewSet
from .user_consent import UserConsentViewSet
from .user_stats import UserStatsViewSet
from .uqj_update import UpdateUQJViewSet
from .question_report import QuestionReportViewSet
