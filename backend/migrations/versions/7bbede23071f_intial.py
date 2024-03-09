"""intial

Revision ID: 7bbede23071f
Revises: 25f52085b1dc
Create Date: 2024-03-09 21:03:49.638499

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '7bbede23071f'
down_revision: Union[str, None] = '25f52085b1dc'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
