"""changed id dict

Revision ID: 065ee954082f
Revises: 903c44e60147
Create Date: 2024-03-09 22:05:18.362190

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '065ee954082f'
down_revision: Union[str, None] = '903c44e60147'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
